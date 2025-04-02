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
    "4kBpPp796DsXxXRDWnqCP4VHkc8DHsp6AJgTyhRA4e5K8qp6NH3WDo5nLpkD6GqHGf2Fv6a7VjV9RzGa2MwHTiVs"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "33HQuciDEz11Gr86SisNdzeapEbYLomvxA9khdb7kvX9sPK4PppHXqcufoMNomDdj3NsC9StrHMZAU3oJ6cqbetH",
  "key1": "4YbQwaU6vEa1xu1EGYmEyf7HE9DbeACaErbMikmpNPLG6uDFa5Ciz48AxsSZ1QaU49icrfCzSEusm77YC6jDuTvX",
  "key2": "4htiNWtRaQNKUdM2MP4EnAc7beRSFMiL12qh6mzjvx5RUk7Dq2aETKSV8VnLPyGFzt6Ru6kWL6W9KeMo9bAxGH3j",
  "key3": "4EpwRoEdWpcAa1VRvHTL5T14tdNQRLa1N2wkRrvLCpPaexEipA7wrKXksr8rwZrwvDaGo9VzEDPaPz6sGrm1fEeY",
  "key4": "4X82EZp2S9REJVzXvaWe7TpP7jBn55FiuKcZasv7dNHdmnG5PKkzb8JFnrbERDLm1Udy6FnFFQZofXxoFTHV1uxB",
  "key5": "2sFj2kW4m1eLDRopYNjaSyKHagRyUryHNUBJk8nrW92jHzMnqYqQZ1cX3VXJsgMX7MU49hruVbcDs942yUuKx4ER",
  "key6": "2RdAp6dQWJYirv4AVQnNk42EM2PtRCFsiy4UbcMKhF29VDkaukmNXwSyTYRBmQQtBer6v1gqs7eb5fG7WcWvJyf1",
  "key7": "3xTKwa9gwcQRXbZLR8Y4boExwqd6LDDZhH3bE73eJYkkaDJMUgbViMRC8ZJUhiNmKaZJe4KmJm5rA1E8qjaong6a",
  "key8": "7NiiyV88A3TWEbyfNCq8HeTJfFbjMEpg4BeU3uB9A73cSs3SSGjGDqXifymxRzJnY9u5PvUve8jZUJunTCFVE89",
  "key9": "3EccjhjqPuRmff96NdRoGMDJBanFvZjDDayXh3vWEQUSsrmFzhrsgJfAUU8DbWpi5fsmA2yxRJUw7BHJV1tFNVFu",
  "key10": "3DnyUoFxA4NyxRJd4zmtt5Jct9pfs7bTSoNCjT496wVrXEss1p6JwM7qGaxWXM1Zra39HuXRyt6Zj1akQpKHBcyS",
  "key11": "4jsdNeujQbTB9TjNVJgyJ7wLB7p7bqcDK21FduaJKCAubPiorUTZzVfeGJib2qGdbcMh1mL135fMVx9DNJbB9RvQ",
  "key12": "2VpAdEn8LddSHSFgWYDbxEuauikcfeDcdskNaQtYu2gUgbonz62e2JFx1JwLqmE5xnPhqNYwSWWD7MSxNXcD1VMU",
  "key13": "2boCDf1TZSginuAz8ZBK3ArMfquKPecVHEF5qthxx93SU7pzbFpeaDpsxkGZZez29KUnmhFMQ6wj8h7uKPjFSQgQ",
  "key14": "2xXzzeVSqHNKhCNbx5UJopgGXNxEHP888irnLXwM6NtBy7HPiwSYGQ7VGGtoETmRzkU4vDtWBF53XK6s9f3o1P9e",
  "key15": "G6F5CarSDKmPsvAny1bZwhyG64QGw7Y3G1bMcnVL5oHimYTL8b1hLawia1FCUYaoeB3WPGk6PX4DRK2LnkEFWny",
  "key16": "5xr674FNBiN1e6hS5JpxAWtPmmYroLaUrdRkyTCVxomwDMs19JYUsjGoaZXDNPHuPqfvvo9gT6tmpcsD9onjGroP",
  "key17": "RbRY2hvifcTf45BHBvU6pN7WzM4adFYSBYnmTQuDr6kWYFbAYwJosUpXW5aXGMgD3P1vqpekoJegBiaR6LBMbmx",
  "key18": "2jqBeyAxP9TywU5ERntbo3kcRzfRyDxF1VuXedYuWiKGNhHegtGPeBG4StPB9DMFTHgETjQx9AtRqE5UuAVS8jm8",
  "key19": "4frd5NZuhtKpe5ECA4NkTqjqj24bTG4ckhReAG3vGGGbvHD6Go57XfE3uiJxU2wgBngdv6Ws4JVB1KiawZcFwwVe",
  "key20": "65tEESMKWR7iL7itqcrrSVVeRCpyyF93UMujJVWtW3ZBXXREdp2gMaLzwQLEuSr24D18tyLvSc2A4RjspEvhN8vw",
  "key21": "3P33a1KL8G1g7a2LfurvxKcwP1tee4rvng2d3f2DQMxpfv7s8rPHyTC1XugjSeRhjaqdPL48SQ4qAYzDy4k8tfag",
  "key22": "52ukgbkFkBDeRwDuzuybmtuDgNEjLDqDCpGVx6ZuRXqMnqSDoczH6HN93BGmf3MxVee59a26AnPsT6wsi2QjCdEX",
  "key23": "5rstBBHuxY1NmXTvhS1YjW7uveBx3LnvLQbMfF6G8yGJLBMpxDZq7m2jAHKivUEqSGTSvMaNgEoxGD4JPNteFkW3",
  "key24": "sSLyHfWYbxPEFsGWz4oZxH4CVXyNz6XRa5dR2Fsjb5DG6xNuYRPCPPkc6vGoJPN7vTotExr8akR3oS67EWNXaGs",
  "key25": "4AN9wocHZPFyCL8ffHxhnbRa3PA6RVB4Sk59gL3ZZb4zTJPsFKJTAtcNqpQJEdhFTDk6dij7FEBC6wEFqmt4eAdf",
  "key26": "3E7mioL8P1gMthYDUPgMp5C5KkkxQDeYrf8GfZTj1MxW9cQRUpGW5xbwTsuUfKGSeJRV16GhfjKBRwkfoanMBMwE",
  "key27": "5Gj2yDemvR7TXLcGciQ2jzrVW1S1GR8BKrF1hbeBLBoCo453g6suVjsQ1aAuCinPw6f94jZzUo7zytUgZzJnQYqZ",
  "key28": "29GdRQQjpS4XoFifaWx8W6qJczrWz9Z9HqmckfxqA7mXLGSDUsnwe25crLrkHHMKxK67kWVxCk1BwELphASfc4JC",
  "key29": "4Z8kBisB85yCUH4ojHAYngvr46PJQ1cqSKUVCAR5hhNyRNoq9TbWZNDgaMqQVxE7Jh2YADDMrPXR8KCH1jwUmFrk",
  "key30": "2XyT4p9KGxYpX59DuZxYo3bkqRdBpbagdPeU5vjYNiJm7f9CpvreC8UkKkyg5JvUDcUBEbNGMHifeApNYjnBjLXB",
  "key31": "mjU12TyzMEt8R8264Xbdzv6yuZV6NgVbPRrxeSc2HCYEKjmqdVe1yKvzX1VhDEfDHJET4gedwtw9cq7B7iNP6eB",
  "key32": "nmgYbifmArmWekJd1zCwP5s4k13kZtzsxvH9EYLEwA3G9fS53QRArDVURQXSD2VBn84PFvDkvQrnLaeyDvLeTCG",
  "key33": "4kHckYFBgoGw7oQ8RhJuaDZGaxzF52FH5zsFfEyZy7uUc6wvGoZ5xqVQZ3bA6kU2LoNCNRyu3NeDKDKeDeeHh3hS",
  "key34": "35PpLCDM5AHFA4GDrDR45VfC28zhGFktvtkpjL7gFa4xLaMVaMFv4z9wmkv7AapYYjVTrsd5SbC71NwjGNCHDrua",
  "key35": "2Kc48gMFEPyNKHcrdMG6pp1P5dzTVU3kybBYVHQG1pUDKuVZwVBAL9MvjNoZyXB9vTKM6ofJfZbCoeBSUxBcEgyr",
  "key36": "2nAJGuVqQkwuHy99douh7qQxRKkVWauHmXJSumGR9xTGoZxpHPMRNtoMBYUBAqNMg9ruhmSFrCFgRpd4WfNNBsJM",
  "key37": "4Q9R55gUm6Z1SVq79pQekxYxkWVUmbbrhsZ1e3bpwW5dP4WJ84NBUEhuacPLGyFDoEhwjHea9FEeedBgChu4kdJz",
  "key38": "3ioXj54FcuJPdjVSYckVVEGTMXBbLVGkxGnDStc5RnsDPsDDTqo5KPtQ8egBtqNwL7AqpjKAR7BxbQYiVKWNCstX",
  "key39": "58Py69YBjJRbG4QUw9b94gcsDKWgSuUuwsAMijftKA9zSDQbhjjXQsCrEyv9PHUHLrSMs4fjV1VQ56TUNd2M8QXE",
  "key40": "2KCUdtJ8GX1i8mz19EiD7FY7ttwqjwi7ApbsTNb6MDRKgDQpqogZfg6MMA4UHgHEZ5Yij4a9ccXXa31VT9eFSEz6",
  "key41": "37N4FC6r3k651dU4RoC5RbJ27BSkp5wFgZCeatNpsu4FiQPkTi9UstHSWxmu7bgeqiu69mh9GiKp6cY3nNiaSa47",
  "key42": "WwvTMFj6FWTqDirtY7wxBjhXeQHbrfi82Z1oMFKYQSA2zicZmEAf6tEXHtdRrxHR2vM5VQYwa3yenRteRNoHiM4",
  "key43": "4vHcT6LkUcFWJDJc2j9Hm3PnXV7cMv52w9T11Lp2Q4FMxQfpiGTDyouMfp46136qaSuvMwc1YvFusKxBSYZsjTsa",
  "key44": "2Upr8dWTFpzchCNw1t7h6DqENzug9y98aYpajqfkHSAhxhmqatwmFVuVnTFsWyqGNAp9Ljqj7w5dw5PrG5n8wtmM"
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
