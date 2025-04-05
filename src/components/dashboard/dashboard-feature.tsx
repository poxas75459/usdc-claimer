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
    "2jDZyVBhqfRdjs6QWkWGsCRSLnZw8A87yXY5VqdEXppe8N1GgXCsaJDN5H9VSgarJay5f3AJ4pmBDVVc9R2Pwzgq"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2JFjJu279igDbad5iytCEYSDD38544G91iHqk7R7hicKy64tSnVMiWwwLGvuGaeBchw6fmtWPAVnReXBZu9YAsfn",
  "key1": "2v6qpFvReTvqEGBekB3N6u16yaRpB4AryFMpzx7xCyitG6qub71cCYSUKz5BuMdpDNpM7EfoaBL9CcMo4ZQDAk32",
  "key2": "5uVKGFotUo5GzZTwwrgUTfiMqMKfjPzEDXiGoaaHHp9EwtsZkNy6fX6MsX8zMi3H7X2V6yCjFXfyJN4DcwFq2dBj",
  "key3": "4Er8523kZkienJ8PqZx4sukTSoTxRcjwfAXRZrFAPuJaiST2WxzAXH5xtn3SVVUwRVPsa3ysk6nALnUUKEpT42WB",
  "key4": "5vcDZhaSSYSWSczbGR8VFq5fPTr3ZmuSjvuQaEHPYjZRmS8KgLDjajJsC9xowBHMT8pDoLvoHx5BrQEyiGRf7563",
  "key5": "5qA1Dj4r8aSgHhs6Jn4eEgR11FdUjnmVLRTe1mXGfo2idrP822hKwr89V43PfAevT1Teg4mQBKzoSEewXThDzAP2",
  "key6": "3c9F684VhDs3BxVeo2qPeuvhUJxn4A2tNop4iNxRxfBZPifPihWPshqLimf64rz1SxGAcnfV3fF19Kfqve9ave1x",
  "key7": "3afeB16UcLpGj42TfLqdC4dvqN4FWU9qCfo8cahqN1QkvLPSRLiZsHzy2KDfpnoJTzdwRbZ2BxuQiA9KiJVSBKRh",
  "key8": "4KZiw62gyrqXysBnvE1snuv3aMRo2ELtmsJbbn8kkHJhxmq52ZCnHTuEm3AkEbyNV5a52kFZjF3SUxmDMTeFb6Ra",
  "key9": "4Npr63qcBR7vKFDtNjxRRrAKyu4FD6RgVKE769g2CzRaGPhupCbHjrhuAUrqWB2zs8pSQrwkPu2KhmEjY2fe7N9n",
  "key10": "PobBgEoaa9quxmcS2RJeZwuwJFaJAsvv3FdGuWtxEw2EdRqG3XUo83P22heutr7VGtBWiP4siJfcqejFQ2HYS56",
  "key11": "2LCdn4bgasNKmoWBhuRRGAQUX36quB3Y5K2kLaDMyr6dnaM32nzkt3PoH57bBDdwBmSka7Q4dmn1Yf9RESjSVt4F",
  "key12": "3FRB37jQuisfs9ahGpnWCppAt3w2cPuHn2aiDEC5nYseNFnnUTh3k7Sqhr5kMiWhCNi9rvBPkLayo5ro2m4TuzQC",
  "key13": "4qT6XAS86Fjn92hAjGQt22ycCJrZQ91sj6UeXGjq1GD6WP7mr6f32qp25xamvh9kUFwABAc3BTWT8ZzZM2X834Mp",
  "key14": "sXdqGh2skNWxPJazNXBdnLieQbVujWT91muLFuF5YnBku4QDBhLfEpfotUXKZsBVpLzARdieBF3krrFiq3qJV7T",
  "key15": "d1j94EWCuSGn5ts3HYrUYpLAuBHuHQjJFFUKP8PkWRnfU42Ri8WiCs1RhmbUxUCaTLyasj69m8CEDgKncAJ5Qc3",
  "key16": "5AQQ381Cr6zCqQmRMDKLM5oQATjuRQDpjKDn2xrsPxRHHMHAwrzAkjeQzuS7DBFuwG78F57CGSvojmqMdWmA1cBo",
  "key17": "o8rkzgCCKs8YqGkLVyV7xvEkEQRirzwdwb3f9WFw9DM9Ht44mpU6JRJtb3hLebE72nFqsTnPdm9XaF7zCxnVWRR",
  "key18": "3jYH2jXmTZdsAsxvikYHaPP51g5ASJ4RLJpgavZLgTfpkzcgY1kCv8tKCXBCTkyfVytbZWCeyuwXS25R3Z4x24ot",
  "key19": "3wF3c8D43ZgR2nyYaSJ22CrU2y7AqLsjzLeEX1fusdZh71ZeY6B4aDWbpCSU8GrgT42HxrjVyvSxD7XGwGxYwMDj",
  "key20": "5K1RmW6NdXWt4BNwQkzCnVvpb71DgswP3u8boSRa2j95VTfmRSFAs4XeNBxkt6FG3uwoLYyqLpQVcxPP3yVgWgKd",
  "key21": "3ivAZYhdmMXhZFLwQP5UmDJ8qyfUa8FZK1tiU4xa9XFaBey38ogD8sx5WFmu9fs656yxUz92UQUNxGfzAn3ofm9b",
  "key22": "3qvuPAJsdAzam9kn5CZxAcxFJZeQyxiPNACFu58RovJjvZjRxpevoWyXh6cEsXF4XM23K4EJskpzNQqmgxMYBBFa",
  "key23": "4KX5CEgmwQjAaz2d6jizsD2uibPi6Mtemzc7BiY5GXnZcWakS9fLuabqKX5SqZ5gxNhLxZVzw9smMg9ste2bjCDb",
  "key24": "2x2Vn16cFxbxiY7UsR6oFxJ23CFnLKQiLK4MVLGxUyeuJDK2G29Yc8WPoVeo9KderW4iDYyxHK45SYFcfnFF5jdr",
  "key25": "3royihLZJork78RevMmFPvzwamtfNwmsLh8XGY3RKqUnVoXg7a1awNVL7PLUjKEsXbyYt4nrqmA215NZCgLs1WSp",
  "key26": "PhgZFZU6Wn8SXfYUEw7CdquZ5PW6QBc7RnUVnGggLsyNEmAiXXnjkyU4CfQwpsWwFgBhgR8chasGG9AePGHm8sF",
  "key27": "BDWD8giLqjqkxhsaLV2ewusCAw42WmzFBMfeqPtWhFvgNWB7feByDWsVrb2KSnQevvGhhAgL3vNT7q5mfyCagLg",
  "key28": "4ExT6EkHs36NgXTLbRwdmrDXhcDXHnBF3dkr1foLifqQac7XgcCV133EStDQPjPXcbBJFL6H9BLM4ws7o2Agr1SX",
  "key29": "2tuNDZeRQpfFgvgQfWH8ueMGbYdELvVRghrXwjJn3HfAyekXqo8asn5xsK2wC6cvq4bCHcsErfue8bpvH9mAbMu9",
  "key30": "4ToiHvnjhaV6buo982SfhggV1beJ3EGT8Q5Qupt5kBmEbQm87X1jMxknAoXBLWMmCPQ4a3XZLoL7vJP1Wv91QPBV",
  "key31": "57yYWNAYVjHieEqM2JoCMyLbcyqFaQnzM4oSKSTJtUo9DKNYAhQ3vTu23C1eUyh8fqowXMGrdDYzkzs7xEezZ4PS",
  "key32": "5BixkJHEQhdVzU6yydm2He98qSLmrnmPHmpUAdum9AajTDLduFJdomQTr2izCwgdzDYV69fjUpZN5DAegp9rfHta",
  "key33": "3frd4phtkwQNsz3a4ehcAXbVomZqfN25si6fiQVn7ejy2nXBg36aLLVZSAmHuLGbAcrJXevZe5EZ3ptNzVXzBeQC",
  "key34": "29y6Ex7KrQuhWuXm4GGF4aS2Yph8q4HMJ2nwEDGj4jGdmRgfc6Ehbs9uPM31drAKX6UD2mnHhwPzatoV8mGbYzUw",
  "key35": "5KxiKNmZBSU5ck4GDxfEpUom2h3hdJkuQTGkfKCsNKQvSWkxPFxMhRRGRed1vxgVBShT8ncwygdhg7HGjUEXP7Kx",
  "key36": "24dZVZFURDEneWwcpPyygKxiyS8tHGVGP4B5eijPGPyPCeRoLvTrBBLfZVEJSKEUksVPzmrT7Q6uNqvaLDjuWi5K",
  "key37": "PBFQ3jrmJzpgBYDq9Dj2iG7bELXuGiqqBzNiyQmPpuX25N5DRGsrP7mfgzSxMS1LePjUeU2jGEutb3BWs3xx2Zo"
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
