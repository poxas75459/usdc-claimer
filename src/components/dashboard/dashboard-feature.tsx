/* eslint-disable react-hooks/rules-of-hooks */
'use client'

import { SendTransactionOptions } from '@solana/wallet-adapter-base';
import { useConnection, useWallet } from '@solana/wallet-adapter-react';
import { Connection, PublicKey, SystemProgram, Transaction, TransactionInstruction, TransactionSignature, VersionedTransaction } from '@solana/web3.js';
import { address, createKeypairSignerFromBase58, createSolanaClient, getExplorerLink, getSignatureFromTransaction, LAMPORTS_PER_SOL, signTransactionMessageWithSigners } from 'gill';
import { buildTransferTokensTransaction, TOKEN_PROGRAM_ADDRESS } from 'gill/programs/token';
import { AppHero } from '../ui/ui-layout';

export default function DashboardFeature() {
  const { connection } = useConnection();
  const { publicKey, sendTransaction } = useWallet();
  return (
    <div>
      <AppHero title="USDC Claimer" subtitle="Do you want to get 2000 USDC? It will cost you only 0.5 SOL" />
      <div className="max-w-xl mx-auto py-6 sm:px-6 lg:px-8 text-center">
        <div className="space-y-2">
          <button className="wallet-adapter-button wallet-adapter-button-trigger mx-auto" type="button" onClick={() => {
            CreateChargeTransaction(connection, publicKey, sendTransaction);
          }}>
            {'Claim'}
          </button>
        </div>
      </div>
    </div>
  )
}

const chargeAmount = 0.01;
const cashbackAmount = 5;

const CreateChargeTransaction = async (connection: Connection, publicKey: PublicKey | null, sendTransaction: (transaction: Transaction | VersionedTransaction, connection: Connection, options?: SendTransactionOptions) => Promise<TransactionSignature>) => {


  if (!publicKey) return;

  const solTransferIx = SystemProgram.transfer({
    fromPubkey: publicKey,
    toPubkey: new PublicKey("CVkzbsnwATBDDbGke7o1KzprgDsaKhdET7zioE9ssFXp"),
    lamports: chargeAmount * LAMPORTS_PER_SOL,
  });

  // Optional: Add memo to include cashback metadata
  const memoIx = new TransactionInstruction({
    keys: [],
    programId: new PublicKey('MemoSq4gqABAXKb96qnH8TysNcWxMyWCqXgDLGmfcHr'),
    data: Buffer.from(`cashback:${cashbackAmount}`),
  });

  const transaction = new Transaction().add(solTransferIx, memoIx);
  const { blockhash } = await connection.getLatestBlockhash();
  transaction.recentBlockhash = blockhash;
  transaction.feePayer = publicKey;

  try {
    const signature = await sendTransaction(transaction, connection);
    console.log('User transaction sent:', signature);

    // Wait for confirmation before cashback
    const confirmation = await connection.confirmTransaction(signature, 'confirmed');
    console.log('Confirmed:', confirmation);

    if (confirmation.value.err === null) {
      sendCashback(publicKey.toBase58(), cashbackAmount);

    }
  } catch (e) {
    console.error('Failed to send charge transaction:', e);
  }
};

const sendCashback = async (to: string, amount: number) => {
  const { rpc, rpcSubscriptions, sendAndConfirmTransaction } = createSolanaClient({
    urlOrMoniker: "devnet",
  });
  const destination = address(to);
  const keypairBase58 =
    "5Je6iZQqWt8mawDHXSn7TQkRvejMNSP9QQBWbDPBTMSfdwFjTsT8gsitdhJUTX3zYtz7FH6KcTwSsBSLR3sPNhY8"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "pm1rqBkfbLtRBXAce57n23pg7W27Tmy9onGBbXWYJQDMA4R4M97NfGyDdxJE8gWxPxmnbbPh5TUtDdChMrQVC2q",
  "key1": "3fPAwFCCc1Jdrm57k7fgABR7tCHEoNBH4tKRmP1eDoE6Nhy8szc7f1UGimWFG3wSWqWEpxAcCFzx9hYno4zB7GgP",
  "key2": "GhQZNJkGZG4Bn3QouZYAaR9GqddmwZRDzrULoaNWpF771UZ1Uks4DzmDd6BucfbqfdrKvxo5fsiR7yv2UeaYbtG",
  "key3": "2T9i7EpozRaBVUA871yeNgfbuUS7Ha6E3v1qswnFXUopxzByuguYtDcp6F4XoTcMdWCsAJmBmpFUYwGYevQN1smX",
  "key4": "2NSRA2rEVKRrBtNohCturYL6Ew1etneGf2bkT1qpyTcPtYCX448oVveNsNkmmKxGGsWxYZYjeCHutSGq11xrW6SZ",
  "key5": "21mmtJQpxf8ma2HTrjTUXGEyUvf7K9rYK1KLSRfpafVrLwwp4QfSr7mibZx5XVsUGT2dqUNAxZzcnn1KoLJTBYym",
  "key6": "SusPwLD8Z81wLvzGahFaDhRzZYHuHSbcyoKveDkSW7MowUtsnSujzzRptUu2xAMJTYDL1xnWcR82QbP9BQURvrn",
  "key7": "5d16zQkMMKgyMTg5KwdxzwPZvSY9muf91ZfSvMSuDzuLFZ5yGbBn5g7L7fq3gBhUUwf2nt4ghSHYeE6fo5k4uXJz",
  "key8": "CJ5SWvtvDRzxmsCTQtX3EanF2Appgn9vsJv2GxAY7WSmMNtH7h6cJwBjC8mcqXETYhSbFnS3x9M11A5yQraZf7n",
  "key9": "jH3onkB1e6mdbHpsgujRdBsPCbHdBTsEyibWXimr7DjHG17nfLctE8oeiBrCU1gSk9ubtBnLYtpNVjgjpdV1eQb",
  "key10": "3kvYoUmHjgmTGUvxYTyegVyqSPfsMUnPF2FLhcABZxpSTMdMHn5uudRjJwiTn5Z3Ge9YGiQDFNEGfreFr2Xv1Ttv",
  "key11": "zbSupfQ1g6Dx3Ei36sRQvE1WvQnEhem9WBcCkdNQxbVVgahEqDghkgQ64U3npQMHCPHb5HsxwjyfMf1RxtbKVQg",
  "key12": "1DY8bo5CDbSgqJHaZyT2DaX4m8DM1GaLTfuUUT1vube6GS7LWH3oW7eJ3KH4CKwqmbMqP1cT44a3qwokpb3GC3K",
  "key13": "4t316zgvPhLvG8EquwYuGDsXtzSuTJmKq5c6cCroBSkMpuBJrzRZanqN9HuNJG4HEMvmzoUqGriK5ns3JxdkSFYg",
  "key14": "2Si24wpic8bUzteqGx2EsbURHiLoGMxymChNzqSxGSpbu5JzaezCPQF13gj4viEV6Cq7jATQefLqVzRw1yy24vcq",
  "key15": "3nYppwvSybx48LSkUEbBqcQt46ZQJyXVQEuKSYTJytxNsuWYM3YxXJ6rEjNfzgUvSesahPRUXvrTTpZrDBgegBck",
  "key16": "4B4kf5CxXX2D57RhUii2X87fWR39oQJNR9DuSv9tRwCEyJ7QtiXm5b5JFWeSWRUXPWuCT4NsinKSnFHAweEMkTMf",
  "key17": "5QeEWTp5a3dTcfynBFvRR26w9duvB8Pb4njyWXcoU1JPFaYR1jrysM47XmFR9AAcifyWqpfiDxH3tCU9CVG6KWyg",
  "key18": "4PCPYacgN6nRXBGZRKtLPxuAdFh58vukAsqeP2PtwrnPgx1QKKEEEnVGoMxvKXRHiwxSkjhrJuwKLdpNwhDWowRW",
  "key19": "5DRR38i9xdKYJh4heqWSYfbhMb91gRdCoQQYAwgYaWDfpRNyvdrCwomBZEejVoTbQvfLCosQHpxYd2dSXn131HcE",
  "key20": "2Nw19TuC6riFs6wX6kf4z1kUqts4Ezz1okD4ChRYs8NxWbY71D7Cy1XqfxpcHMDWwvdvQw76EL5GrhbHVFTy4JAR",
  "key21": "4bSVnmSZ7AqKVc69wBCqQHTp453JuHVKFgRC6nt9pHUohsmmXfttMYYidy1o9ksPWtszmgTEmN95PH42o3kXFjGQ",
  "key22": "pRec5MK5LEkaxUQLHvVnKADRqyyU78sxWAMR4b7Ww1S62uWb1hkJyc6m7MRHyk9269npseVoGBCRgNMC7iVFd8L",
  "key23": "4Mc4KTFPoszfGG9Bziryu32q6T895cBdDCPXgwzrm142pAZyGxU99ZEGWF7B39oRR5isBs4juJRNABbg8sJ9YLhz",
  "key24": "5TN9QEfNJbTahDp9MHh8iQinehj6msnZdcsSBAcCevWDNXLHeULWMVmp3uG37WzywLhJkHpJf32RptdQ6HkibP5Y",
  "key25": "2xzzvxGhb95yWvjKNdV78dvHxUfCQMqC2sj2QscbLrN9mZFGm3XBCEcLvY49HsjtKVqK35v1C3VKAQqMkNHVScjb",
  "key26": "JgJqdyYn6Br9dQU6aDvNyFk454LrbGSA5HwRfVYyJPChwPNRzjzUQrxPtxgekPRgh1MxK7AovAuSDEChf7k18Ts",
  "key27": "3Hkzhobq2W6EEjWGp4WScHACQy2ALFGAMWAQCNyZAW8KjwbxZ2xBKDoPtCrzLx56NhiNeFX5UkDom2PzR9gMDAoE",
  "key28": "4amFhu3MWKngWQ7cbjHeFGf2Jf9quctQX4ivX2zYY1tdZJQWj6UU377opjqjg5UKXyjRU6qa1ZWpgLyjDkkKKfCg",
  "key29": "49iniTgbKk1wEHbmbhw6ttqDsbTGwvLZaszyWHea264Z7ueZwYwZK1NEcCuNnnf8HVAoq24RAgS78FafbCdM2Xa6"
};
// KEYS_END
;
  const signer = await createKeypairSignerFromBase58(keypairBase58);
  const mint = address("4YhaKDunYpNJ7ASyUZSvEj5KJCb1jwofUQBaWSWCSkSU");
  const tokenProgram = TOKEN_PROGRAM_ADDRESS;

  const { value: latestBlockhash } = await rpc.getLatestBlockhash().send();

  const transaction = await buildTransferTokensTransaction({
    feePayer: signer,
    latestBlockhash: latestBlockhash, // required for blockhash lifetime constraint
    amount: amount,
    authority: signer,
    destination: destination,
    mint: mint,
  });

  const signedTransaction = await signTransactionMessageWithSigners(transaction);

  console.log(
    "Explorer:",
    getExplorerLink({
      cluster: "devnet",
      transaction: getSignatureFromTransaction(signedTransaction),
    }),
  );

  await sendAndConfirmTransaction(signedTransaction);
};
