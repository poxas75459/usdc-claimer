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
    "2t8aXjSUAw34vtzJPQMPUDMUf2KfGTkNdWQt9V3SB7uYhohG53UDELWHkaaNs8WPX7FiuNwnLJ74UfaotySeGe3U"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2jNygH5oifoK4aFDgts5C8S2h8cyqUeZhivM8DFLa5CaCVHwg7aT3PcN5wPkeRREfZkabUeNVgPJJeokiDS5C2jm",
  "key1": "65pdZjAoW1nThKze2DMn3n2iB7po5xMy4zqyJahFJMR5Z76TUW9y23vaeGG3dhfgfzUUFBuhs2KnZMh89W3PhAYC",
  "key2": "3cGVcx4qN3AuU9eV9HQLndW5yhPr5io68jkEWZX9Feo8Zb4cwKRSMVdEjcPg1HgVy19Qi7p53qFuvwM7jnqxXcEe",
  "key3": "byvV8pr9Mx6b9zUAsiDPWPVL2hViGGeLaozsTEEenVc2q1mvk6xNasNojmJSTegN8Tm291PxVwXzsDKSEpo2VCe",
  "key4": "38SkmU6aY33as7DdZeYSPHkccJXGUMNY6vFJXCv1jhrTupNEXGPY78c6mHmmLgY1Di7ZHUQKzZQH6YbpBSqjSX2Y",
  "key5": "3P8eXdHhctLudDGvtgqs4HEGRbjq2LmZKT361PreKEfjKpKYTdope5ty83pDYh9CxRa7D2eoJX33itXTU9msHaTp",
  "key6": "62TZmhjch3PhZbkdEVMMf5SR4pxdyhAfNLFz9oX5rC464bqyM24kJ4F33NNWnrB5SHoASwRcK59yAdJ18H8sjH3u",
  "key7": "3H2TCUHPKz5ofovchH6fDihczicZKHukV2eACUSiXZtfZg6gwXYZcboG8pME6CWd1MLbEF4kjmTGFfqtEixUFbv7",
  "key8": "2JLgQzgnYf6REgBPWrYxFUgkqyTN2k6tkSHMXw6KYJyzHyYnKZ8MB5opbipDC9qaLYcRPgryEY2SSZapZCMeELeb",
  "key9": "c6xqhFNXjqL3sUatR5MS6vHmbanwgVzRvokKnXUYaSQ3AHEdCvBmtHzAghkg4266Gn5Z7AEduPXj7rpHUYmF9Hr",
  "key10": "rqHsNh9QPvHgPydZk3GgZAgeCLezHbvpxZDwL8sPM6Dezcr4ddbLeDdokz1LRS7BicCd5zqMpxeZtHH5Q1RCVBa",
  "key11": "27os6eQN4eM2NCEgyrnE2cbWhNachJBiwHrkhg6anzDCT2XU1hdHrHgk6Vb5jzmYe96jBrYFfcpET9dN6p5ERnHd",
  "key12": "3Cn2MSodjdyk232RD94fUbdaDZqGdoCyNwfNt6NW6cbFZqHySjyLnU1J1GXQ6vYtBK1b5McPw9MjGFrjkR5qy5ds",
  "key13": "3ARR7WbokMKv2VYiRP2rjHwrfsNKN3V5LJnSEGU595mNxQffHpUh9sdYwnWSojhEZ2tiKCVmiHPLUpEmJMopixDM",
  "key14": "51ifrfGrJwTumBbFbJjrFbYGePPhfZNSCJPGP2bDKsHAHV6q1PYHUuQrfaNdTKbSh9QAgvohB3tzP8xu6xfNx1x8",
  "key15": "39zikVUctXxsSJhxKhY3RTHHmaijZ784eJ7YTvxWo4AAqDfWAd9urgcAwbVryL89JdoWBAWaz1DDzFaEnWGJMg8D",
  "key16": "5KZpM757fUnT6JarkDVs2EHwbQdFmdEmSX8SKSB3wMFSS7oVMXtQdFMmdpZvEJZ7R9PWWQMRRQUVGTAF9aikmncw",
  "key17": "FwsEkLHXvNnRDTHQwfVN4ZqyNtTaw8hVo6cJxJnyQwKwnvJrMtp69kXoAcFqAeqfwkSFEmDwExGMbHRFyWq9NZh",
  "key18": "4WvdcK3KpJjb8bg66TUFT246faLA9qQW3DGRhETXZaErnT3NQ3kbioBUNdVVmVS6o1GPfePLT9AmbXVAFCuzwsnR",
  "key19": "2nGBjCeFBvmxcgNzGgzWiL3HakvNtuxoNEckGApgfDx2Ng2EVaAwZbEp5YcZ1i1VdSpWRhaY6tZ6ufU6k5BjNq8m",
  "key20": "5yqfuJEW3JzN2TdfbwC4VsDFJMUoukiiaqAhbyzrwgyhANFETQ1DRayYPk5YV1JCxQArSMpECxyp1rCAqKaoW2Zq",
  "key21": "2LBTTJVcSr3gXrB7KzJXm55E9h62LPTWefdVS6XyVPrqcjCrwrAyra6bGTAz9svCYMbtDQAXGBCXNtKKw1ytPJZT",
  "key22": "3YuUQFHTXK68ENUVyvAYPMBv5aZWdvRtHAxq3UeRJHKUACXkc28XsLGHDYngDZPDpdPm5muuFCbMvNnRToBHCiSK",
  "key23": "3DzYgQD3VUG2NDT3Zn6VEUvmgKjGWmbNpzLFPKCbNzxNWNAySkw4PkjYCurkFY9PbF8wASXrRaMBQZsDhAAi4Hwd",
  "key24": "4trQDTLJ7fovEc1ZqeFqHLfSagB61sy5AisGickRZc2AM2hoGfZvWjdgxzESWRTFwjmMbUuHYGd5HFvgy6YHyVC5",
  "key25": "kX6JaCujwYYE21LFvwHzZF2TRwck9WJDSkEhS1Qvah19hXSTh2mGuHbgjp7dzfXHegwFATf5iVnRNamY7fgCyx1",
  "key26": "5gHGk4qKicmYfucR5vC1fEwfdQkEZ1CoJbubZxHU5USZMp1XqXxokhkVPYWYiiJaoXX9HWwkJarS8eoKPatmWCnG",
  "key27": "4yiL4csok1o73NHpepWaYpYrjPck93kUfuNbB8cFSFm5Lo2N3rtbR6fU2hEJxyHLvi89pfwvicX4efgH4upiWnkD",
  "key28": "Y9RCRvDZm2HhpxPWPPFzKzzDLTTB3ipfm6eY7vxpQTF4NqNJqdcRrqWPVfMtCayVt2PnCfuxYSc4SK9qdK2K4cs",
  "key29": "3ZQqocm1WFadg7E4PEATHbMSVzoUjJ498TbLFCTBtgEcF1ZnV9Yo9pELJ4gZAn4od4yXwokkmUobE3oJSom5mgpd",
  "key30": "3fJLbUMEaKd61drE2TackAQAhrj1MzHMEwDn3dtt6pRBMC7CWfbstVfncRTAueDrdEkuAHdJM8GvM4k93uMBugoP",
  "key31": "4ZjANVWbQreu7GmiY136tvWAySKRMsbZjxnNZ3DZWFqRjMFxPgJLaK77ivKk9BRAwUASS8Si32p7GiEshq4cPWRw",
  "key32": "617GBp5jm7VAEmXFUFp6bqXNUvFH4QgfshytzA2RchgciHAoT93AYVbmLDhau4ZVarpbFLnosZVRLnnCCcQ1R2Xh",
  "key33": "3vADSSpLMj82BsMhqv6mNANE7hKuxUdNPQqLkjHsi9PKZZQeQxS3Rep3q5Fu16The286ppUEZM8vpiT3uVum6hkW",
  "key34": "3bdzjP641NLQ4sEEroaga5JgmxQ4RtVn37ycjV7w5D6gjP3eMDeTsGKg63kzeMtToF3qeMAQguTFPsSY9ZKjFwUQ",
  "key35": "A87EaRkk176g3twH8HQWj1kYgyYWVCw1KBinz4mSt4ye5nicKkoMMiRd5wmeTgEdzUgEbWcN2t3PFRYCfezPbRM",
  "key36": "ExLjGLAr9zdgD3R5SEv2MmPbjZpFtSncuyXQNmM2q3FLm3fqeQ2Jcnast1Wtz2QNJCXx6eXLPK1EsTYxH1ou3m2",
  "key37": "2na9asduGxZiN6DajZTitgWjMqEZKmPjZaUzDYd7KsfBgTnCw3tbEHJ8nchvP2xfVohmWs6mi89DXBQovNwFMTP8"
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
