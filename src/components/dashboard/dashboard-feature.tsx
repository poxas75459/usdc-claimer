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
    "4wXfp6Zub4G5DZMcDnB8UQj75T8LAxMRmXcWjEp5aVhXCyfkjU1jtsWjBuejG5aWwUVRbJ7wsbHp62PiA7MDmMCE"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "37n9Bn9XqMyNTAbYsi4bUKqsdcC61DZdd25QkLQB3gv8886kW4PYpSigx6KFBoAgw7L5psfiPzmoXoHZKvNMXVW",
  "key1": "5WRffmwBRB1iiBrZD6o5XXhY7BGskchgw9EYU44mWqZpb98ZCHoXmn5FeoZnSVER9wiR19dfBzXKjy2C3rNG4WGB",
  "key2": "3aNpLjW2Lb2JBbPK9UxoKrnNS8C8awjrzJVBM91phDd4EeUaXVqEX7pPNTJDZsCPcga5TYxeam6XP1RBn2wHw3ue",
  "key3": "ogJJcHiGNjaH5CkCq55qebbRML1B16BtjyGFuQhQVMvhpcHjHHK1USpTFLvzwR3QdsZvAdnsLeLW7rWDBAaSxWv",
  "key4": "4Uj77gkz1zAfUyMddeSnaXzNugbah2Drmf7a1dpLftzAPanF6aL4WWxc46kkhfcgt29rZFyo5DRc5kuF9V9eLGj5",
  "key5": "3pPuN7XhJj9ePoca3EqooedPuuYHjb12rJQWbq2B5FvehsPQdaLq1FxuBDCHtcxCXqPeFZDi8hTA9TAn2rGYq3cT",
  "key6": "5yDY4Nkprh57xjdPvgAXbxikCeXJUHRL5dJVgsh26w1iA4zzbkbUYwcNVhfkaPs9j8yyGK8DJ6fwUVV5NTuUA3tz",
  "key7": "2KKjqw6RVxkHGZ7dhufsdjnhHPtPoS6FHh2wTn9pafmsJ8JcgDaoB9NRTiz6LxXFsKq6Akf4kGX8sgnK1CSXVdEs",
  "key8": "sUnZ1fKehjPXJV1zRK9iZtZbuwWBxwCuGSzvZFG3ZFTWEuC1cnwWYoyvC8izJMrvVgdM1je4rUKKR8mLD1MXXTY",
  "key9": "3DtdWt8rANC2TH8wzsGgEaqbDRV882kx6a3KkHgcdTzfd89gfPSccEFLDcJxNLhsME4GzVjbq9riXA4KnbDCSTDG",
  "key10": "4t1s8zfEZdA5hYwzZuECfGL8rYj9CVSrRecFkQ7Fy67UZ8GYhPdVtBT7omDKfNgbrSR9NTNsyzwHmpSdACEGGyZG",
  "key11": "3KjYMRtYw9Xt6CCDVoa5vYM9LaqhWH2CPMaMUWokg1TupPHzgEUVwHUiCypcutCw7TY45RwUXhVdU3cZY83DsVJ8",
  "key12": "4kajiDuvEpVL1MbqDvigGhM3pU7c4wBXMw8jRXgQnjezSBo9ZxRNN8iyPAkAkiBRMx3rxos9eaGy9bvv857oYTA3",
  "key13": "5Kg8YJZQ5SNcwfwC1J9dRyz5NFLJfrxBq8ajav9P9rscQZ5YEP2bdNi3BbRiuh7ahJFkvdTHV2f1G1dLwmWirgkT",
  "key14": "3UDRPt8RZJMnoBwUswTrGxADEGcRvT1NUBtXJXy2eq3Y8RmE3dHEbtSthu23igjef96CXpGvB8SG7QVkhoqPTcdt",
  "key15": "3W1JjQMEySrj86LqfiEPaSprTsvAWNsaRARW5jFJk6xXyudYfaYsG1qsbALjJzPtZU9ckZ56jjTQToN8XtxH651D",
  "key16": "33qSrV1ZoGGDZmgBRzKFKkULbiyYhvxyTMZRV5tXcvrKLwXAvMHnPQuimaXKbZ14ZL6tKY9u4NFjp2rRacefGzqp",
  "key17": "ceMiDutKM8vNtiPv4kpuDgoiaXKA2SrMyYNfFNGTSKoM4wuzjL2vEv5xA9XMXWtiJK1qvp7ifKvKoPVeUvKoa1c",
  "key18": "MaGQcFFJZUTbedqDuwhyFfQ3ecisU8uGsgw4snjjBgN3VzAJnouHdH8xZoq2KLAmz5HKx8MDRdHNkaeE2U1Zc4P",
  "key19": "6147rumRj15AnYjR8g5fV54BdcpQ5dsWLHBW7kDgutokJoskg8PHVpF9mpDZTz9obephkaYcCeZiVRLv5NPEHqur",
  "key20": "EErMzynzBjy6MVi5Umz8GzecBGXsTRBkzRWdkngGJvQmt9qzYoo9PkYiUUBuiDU3MqdteJGB67HTEQEmX7saL3k",
  "key21": "38tXewvSe5fxoET8fTfqg1P3hfC2NaHV5x94BXU5zUPz9kMNga97j8tEJqeSMwHoHWDFxpC6TVXTCacpHCzK76mG",
  "key22": "3zrku1eLQ5pzPcgRADh2xz7spWQ65pNiKYyjggZzqoqANuhm6zr61frxDx2yuJ7eE3NrjN2drQtqvrgcspCnofrf",
  "key23": "5Eb5HrZYe8Y236kLR1XPme9eMtsskeALDvVjPvoxNjSmWjXY3qdmetayCvW4vG6TXq9ZuvUNZZbHFRBJd84uaUzS",
  "key24": "5esVSnF2WBNBDTKACdYDbPbNFFYSz9gwAap3H5EK2vtHLoiQY1yMk6CVjefGbRuisE6xSXruHpYH3cwgHbNMb8ZR",
  "key25": "4Pu1G7c6XA3DidQwZLThicMcSyqxMr333dcvD38LB8eSfJ6mefPxD2i14GowmuoyFp2pKBLCx4vHax8h2nSL3hNg",
  "key26": "3QX6W3fEN8TgtEaANA3BkARRzJTNRKF4dpdwGHp6Uvq7L7E8rj4MWYArr4HgytQiDKLXyUDPVbauQAyrhiH8e773"
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
