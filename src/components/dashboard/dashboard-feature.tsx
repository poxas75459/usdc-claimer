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
    "3QycCKq4zXrDF83JTCFZQ3mtBXx4tnNbjvD1okCKipVexaWnBas6m8R7zxEniJnoPPHKS812XqGyjhpZYpLiRfbY"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3kYAGy2i9zJrb9HDqPA4jYQGNTfusH3ooj8RMWnmMRUnSy8jSWcCqArS7SUDc4eHobGFEHcD2Lw6WxCMHATvH2UW",
  "key1": "5TPHV8Z5v2PxXFcf8oAxKbCTzSFwCDW5tZVb7Yj9gyPQ78ZjHbuqvvrzvRmZdmpgsGjhhwEWHSYjLEdUZPDaM23m",
  "key2": "4vHpEWRLAeCNAJtL43QEtTTeowNa7DBtYFKBtboSyDvLLcKMSCvAZDUbr3Uf6TGZEWT37qSfdZ5ntPJbDhk5qDxK",
  "key3": "2juVXpcx5BvzQn7xqGJnxyPZu4dFB8dAg53XhcUHn67Q673kjS43AFhUtkf9W46soFFzEppzsBBfArHeEfwgfk6Q",
  "key4": "51DeoDVuB7sSL1SrMA81Jzwoy5Zv3ZKUPU4atp45jhqcQGjmcch79vSjBGe4jN5i72L8pBTceCeKjrE85eHAnNWA",
  "key5": "3knZf7XgKjhqtQuzMtN36QVgGHXdAypewDbMsuTWVt3Dd6ZfU5zYk6SiFWxDGsaK8QBWe8T84KMQ46XsYygWjSfP",
  "key6": "3dQVx6kDguXdbHZb9wEmPYayZ1WppUwECt7iJaxmxLtxtHEyvznoV8FtSy1WeSk2xsAFjfYoBGm4r8bGk6LroDxn",
  "key7": "2D9kog5BCN7e1zd2jJYGNFexAGToLSefrHoU3JpsW33zothfRCQuBcTzcdtq2YDAHTAFQZSWX9pVR7iBmzuWcXFU",
  "key8": "4LFEtYTitPnkQTD14YAMPThSqc6C22DxhPQeWcGt8qR36aJJmscvMJHRNB76SipvNcssKddWjwociti6PWoyMca5",
  "key9": "5wTTixv4jpzrKh3Lg6Ty9rT4a6VUwzFKaZJ6v5529WCmQ2goAQAJACND4auoVBs1aVortY9YAHKpDcYXKRR3JzPF",
  "key10": "XyuckDdyL3PTkC1VhxL9cXtsm6Us2iE7Nqsdabrzv9MWvx6F5PuLoHCLLuKVpwjcYP1KLvrKfdVpS35cQVu53SL",
  "key11": "arE2gAs86NBwLxcQALLNQwB2FkMDH991V92fJizn7vqUxLK8WgczHgzW3extHSfcu3xqDinj8ubtrsmxEsMu8h1",
  "key12": "2H6T6yw3ZgSwZgoszj9ctsEunjCZVGaJKBL6ayoWw8piWKsgD8ALjQzUJsL3xJY2R6KcnQTTyjZuZDcH1BzRw8fP",
  "key13": "uwP7crx3dHHtYPHtAN5cbku75M3ZhnBPCGidv6YSDQauv6Uid5Sip7cp2Cn7KgShrgYvSgUkChcJYbk9Vxur3FE",
  "key14": "2bzJj6kXDjf7kKhvLwEiyJsVEGR4WPepWn1ynAc14khqjwDiUSMGdMRGjPa5hX1drEPmPBmhwFK6vJKzWvDWWRjs",
  "key15": "4AuvENooYWw9anEDX5gTAtTwzjjkwBwBbpGyBJaxRBTGimACnSCLKTCMfHM6u8U767qz3dvc6bQUSwozEUFe2VfL",
  "key16": "SVCNgrC4AZpd7fKNZVFuhX933LzFDhZZz5ycobR683vjBzRSPDSK4H8SzgwgREC9HT1jDQ9zcH7gEuAPeyjiwQW",
  "key17": "VbUoGb67WERrt49Qi53xj68MMohyPpXQ7ju1TDj4SseUte9L1FiUZreZcug2c5wJRSXiDQfgNWM9yBS6HNCdtdM",
  "key18": "4Cn6UgtUDFbTRNH4p7mJEGHz1dZBezeRivRZm1uFNnhjTSxj6BVL4i9PuVJnBnuE3My8e591zaCFsv3U3PXtoc41",
  "key19": "3Ru2HsveT5vkMjgQQxzCewi5uFhrVd7mW3mKt41uDMuKNFkp98Bktqii8Kustx1E1Ue8xMC2q8AqAba4D6r6pfL3",
  "key20": "122Dx4S8n5i6qKyTwVXDjttTjWNA6csMiJrf2E8zUjKgPC3Lwqhq1SdpfxjDbWTHZEi4vUCCXzTvAm5kvkLpqB7D",
  "key21": "2fjEWMcjqjNCU4agKEWhwaycajbTkcGM6Wukj4tLetXJsbg4brNj83D8vbUwuP6UnBP9Ukid4Y6VP6fKCrH8rj5Q",
  "key22": "2ubgcoooeJ4kYnaTxakPavBbWEQnzoLQXJMmRgUAHjqJEPM7oS25SkET1D3Yi4kLpGkaf4z4vTbDqjHpa3URbLpw",
  "key23": "5tziiiAamyUwEcwaXLd9tPAVFxrEq6fWdRioknjEgUxS1nBtkbSmA89sXGJunjcgf8C1Fgdx1ae3SAvhu86DWyG9",
  "key24": "42Csen66Fo1UdKXwF5D82vmLTJj9na6vazzJAvqHrZLYhpXr3LrcoWhX3PZ9qM14HW7CKqQ9PNALSQTAqbCc8kcm",
  "key25": "4bFuZ7xF5doqsdRkBLda6zjtapz6SZ6AV8ZMKEXivC1VjueB5kRnE2AVNtHurA7d6K94VqRPKDnpnK7TyChxJjp1",
  "key26": "4j9EgmVJ4PSjU7SQPi5uNd7tpuHMZrYDqaphceXvSBDUsRK4AQ1wD75QzQmseDLudEy5pNrYsRemqEjAJZfYpFP9",
  "key27": "3a42S881eCjQRnYEa6UN3FDXkFAeSK4kEQtsYU1bDjVrihHHNwhLVcaeRSDPmXWMsapW7oz4P9hHhA89fajrwoZM"
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
