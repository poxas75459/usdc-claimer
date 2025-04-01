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
    "3q2wZ6o2Pye5gV34bd58fvSUwz1KVieKGdKaX6VUfAjeSQjB747WQ9BuDzuonUDdUAvfwDoL8ZpWmVBiYLjMmx1L"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5pzHw6btztdxQK35riHum9cg6yE22TgHeEgTkLjjdKH8euG4yBXCAB5gjhAx6qNP3md9xeivhSL8bc3TepMiVSKd",
  "key1": "eTeUxcLACFXF2RHe4YxMoMzpkmsMyk8kcsrbuzo4mCLWdFcqgJAX2NqfZ4GsMN1k88szm2N6KzkJghxwoyGXwBh",
  "key2": "3hc2ZUVHHGGbzEMvLDNTTLdB9a5mS1k3tMiFTdY6kGKqiHye4nqu6vkQ593wqkhxcuoushB4kvAN4Z6mjqrTyeQt",
  "key3": "4BWTj8YbSmSKWDSpz4vmwDmgH656PY6sbK774N6FYuzE4brg14xZUWN2LDSTEycs3FeYUm7TfKhgKvxVaERLcep5",
  "key4": "4ncVARh61dzkAjW87x68CdggRywWyCA2LvKf4KKf9i2NFR1hz4aStRkqmu9T5VhL1CP4FjbtaV8vCJLckHMSgUVa",
  "key5": "577Dmyvy6J61Y2EUGDxgXf1JTFF6Xx9Pv6dfParWr6KJjJ46Ktit4PBHehixAxmpgthqoLJPJfMasVRUiBCGktzk",
  "key6": "5ecUP7scQKnR1dbuCNWMhvq8EG8nSnoHfhDE2RQpZ5TcNquqAeLLF5DTSpugofMi36XuRKvYbz3ZFE7cP7pkfPnQ",
  "key7": "2SPs6gPtDQSTSag29mDDcUTXH4FUmKvXdKfyu57DeQswwcTuhNGxzpHMmvg5zJ5g2tdBmxu4Mgf2afhzXDwwac9a",
  "key8": "2EDCAwrfjNyw7GeUTxgQnpjJqD1EZpfV4VR46BQQvoBibVoWdQLyDZmoTTZRAkemyWVYFVSYtxBbY4DUKcPrRBAT",
  "key9": "4YWoiFL5EeKfcZBovAbvRPsG1M3M1rqq1dAgUtKQ7BaNq7WCwBMhkjxc6ppQ6FBrCuS5ZUcQVxYvhQUgox98oX3n",
  "key10": "2qAR2RpkfoHBgj9H19t2EHq2zQpXp1vjAwH1XNWbHQWq5YkXvPczMxscYKHxsGLx8YF4bseEb6JwooESvTa2gSyz",
  "key11": "3FGXnoMQcQNme652BHaMoNNCQ5wgkVVpS9peAazTcwLEhFtazXnozS5AejM4p3R6nYrQDkxgmX7sSBBiCGQxcxfq",
  "key12": "3YjHUNwk3zSpys4FRUnHDPVWPtDZkxwxZs82EUyE5HDH6aib1Gp1prMtfQxGihA2eXW3kCmuzJNsjKgQFpz4hh2J",
  "key13": "3m1t7Xvgxa6ENEkU4gfLZHc22xFxsuTSyuenR2Ma7UeE4QJPUPyV6RX2NiSbhLUDFwgu9j7zhVdQvwrCFC7tm6JD",
  "key14": "2P1u3dxjR3Tmw8RhtPBEybym6ms8KFKV99BXnrzLaXgQnnkLkCPuqWjrkX1c9iwQ7C3gLnx8AfKPSNr1H5tHJT98",
  "key15": "UeB6A4VMKX7aAbLKbCyjYN3VrWthzvymvdKHrH2Td1keMfxGJaTUzGEzmQ2XnTT6gNVyxauRTJmbbQFks1CeaHR",
  "key16": "4eB3qRCVTdaqzVqeF2cVtijtaBgP2vTt6evzc6C1aMELvtaGR41QfnevrGxdiKDC8NVV7XrXQSah3CKWzVEKkFqq",
  "key17": "62uKfDVEzyBF3Ue72ymkdDwiebNArgsdptu9ZJjpcvj9dsobvmiFt8yi1YCf31qrv9V1PVL3WjYGNYp1f5xTafM3",
  "key18": "4VAa7fBa2qfzpBeKykAxFz69rAPJ4CZE5cfoMQSzRRC9PcgKXaepj78ktCw2Tsexr1rWYy3QNrjrGGXg89wFVk23",
  "key19": "2RzgzBFXGBzHqhW9yepDrMx1vzCWWe2y2iRSuhn3EYUTmvjaaD29dLADSxL566hLPELZ7Z4koAb1ysXwjD4hvxnn",
  "key20": "5C7GfUbVPLHDTQqMtNbodgtehSPZrAxyNWgzggR6qKN7exwU7xdzyY7BuBjjmPLdbrqyXBWqPoH4jsRyMB48RpFA",
  "key21": "56JEADDARazSoF9gjetstJ3ojZ11aAMCLHbs19c8FBr5WsYs7PZ4MF1v2ZNXczFxbt3cEdbjfUvXoRgqPB9BsJfL",
  "key22": "3gjR9JzWienjpuCj5cKXuYKveARV3uphUjRw3Ae7uTDBxfM2jXkru1dydtUL1Mx5ntr5HhBSbif42m4H1c3hHs1f",
  "key23": "5XryLgzUfsqSYWS5Xw8ZBHn8ZSLkUkUjNjXii34khfBfDUE6HSMqjqcx1yFNoqGzGMj55F6dvNCW2HN3gT32bhbX",
  "key24": "28XnAe9kQsHsQQa7uw5dqyrNMFnFDvkSTjx3AcgekZoSbSjH8R1rQ7G38YK42QqnTsLaGd2QaheJfuYB2kem4kwG",
  "key25": "35C2bJqRTbzqZeA4tTQmsSMmaDL5n8eRmRasw946ffABh79oxWbpNJQhVfN7nnRMDhv9MpNZFVyR61r6SQNEyqDh",
  "key26": "4roYcupqQ4VS5YYY1xJeTHbXvmcJiojBcAbteRWBCPMq8W5JN9U4NkX4QoWtLoVmJFfUkrTR7XiAFvmiaoVGS6fZ",
  "key27": "4eYy4A5NnFTFqayNAQRJ1xZ81Dicbp6qjdVcFLw8ACNoxovsUoHZh3FDQFcomDwUvztzGCcCSpcpqc7rPs4b3VbF",
  "key28": "93gURjyRPY7FP3gGMwrGzmWtnyf8THM8Rjub8JaSCLnBsEonAYzBshhw7ikwaqYqoZU7Pmzke8R6XhF6ue6a22Y",
  "key29": "C7nVGmw9WCfBNQf8bs641MM9dc5K567W14Uc5i5sZJT2jfdpffcneJRx1UeTBooAp69XntPBVxv9rvice2ESY37",
  "key30": "5CvCQ4VYd3xuZeusVqB1Bzp4h6mbggtjzWSuqiA7dPQhD4egjGaf8RmhKavqwH7jnEsd1VDxwJzE8rr4msKEyRAm",
  "key31": "36zUp8P52q5eJ5ReU8xgLXgbB7wecutskMhmywQCXRcgdLB1KN3vkU2ZjCdqMWi4qdizydS3nGT5gw3P56QJshBM",
  "key32": "5Zogv65omD18ArWbJHb1vQYfPevGncJk7UfCsw6U1YmhftYkKv3RzcRJ4shqySDh6ZiKddiS6PCvmKhwfapLDWSS",
  "key33": "5uKjzp54yunrggYEPL6Sdg4coN5vUZemhRN2QBxNi2qTzryQjqZqkScXDnUPbbtomTrErh4PLF44eqhU1x97DND4",
  "key34": "3hqDj7SqyyNrHbTcYxPtmWxn5hBJi2nxLWxeGdC9yRwC3gt6JHcWBRkBb2oWmsSaZJDkEJ8nhEcoMif1bvJ7sBBG",
  "key35": "4FJqf9Aj5NHHZNFKvx5P9c8A2ib3puk6T2kbhvG6tSLXRRGMicDzcySgYj1YspfDvra8EEzdgVjhdpyGSjgouR9R",
  "key36": "h72WStwkuCmH1M2jENAXpN5bXQ1JciXRg9BmDdhtB8MRSRsb4i33TsEXBxF8WVu7P3Xoh2GJoyRhrZPWVe6bezY",
  "key37": "2hyn9HkMd63SLA4vfTSaHz3CyAokGv8cZk5N2coRHmnRRXDeHcLXfbgLCfGa4TZg4BW9kceUUYatccMkEemAEyod",
  "key38": "3hqLwp3WiXqA2TXkUn4H5XKBUWWEWm3FGdUN6eNDRPrawTMJPqYn22W2Kdz1MnzzEsLjmrNGRRESBxoYeenX1Zw3",
  "key39": "2wsv8cHwJqtZFKzUT5vF75HgSowfMLRtXj9QEHHWvnc7VSZiZSkbPNgawcEyM4hJp4nNWWVsFhgWXsX46F23qWj6",
  "key40": "3SFTPpUyZdNmPMP1WpbJepChgiwGQuA4RGVyFBsdobTdFqiWdHmypidLC3cQMj9tnfWmTSe1vEA38BVEXDSgAGV4",
  "key41": "1R1yBYLjdYtZXaXsVvFQYMXdbb4ctADX7dbDqarHeNhxn4zcNn29g1Wy7rsTgCQq5frpZbMs3C6mpH7bJyAW2Uv",
  "key42": "5Jn22ZMdtSm8YJz5uFZ8mRcPqGz8MmdA8gpwCSacCtMQicNxyqbg9PMqYJztX3PhzJcZGdQevbVjtG3SF5RZBHJ7",
  "key43": "2ohR5oTXHHBFXPGgxsNqAs36XnMrxY2gCPWFVHa1b9eQjKaDwS7XjeCU5twKi9JtoGTRWDqk85w95BFLns2hmwNb",
  "key44": "2HUDPrmHjuavdkFUJHCYrY3EXG1h5S4fBPFdrNB2TyFee6DhUe77kzjM88vUxMdVidAS4oF3rUp2Pai6gTogwPVN",
  "key45": "543kDdEdSDSFahvdExACMEsmaoPjVj6tyMG8rDsjcJyZDnMhe5mEvyRM3XDmFyVdTecCeu7aGS6FtFSJkNCLMAan",
  "key46": "4fD8KXKdTS61XdPeu4U8do23CwH9fJ2wCrGkbsAZbb4z2vctJ6Zc8EwaZWksMb7sJ37P21iH1waZehaHeqxpMTQo",
  "key47": "ctui7NNGSKvCY4Ggp95T9nzfHAUYv3FGMSJufCvxiMD3Xza9Km74gaMA7BA4yGg27oJ2NKbpPNzwsuJCAFCvmai",
  "key48": "2kmoTQVnmUNHSknk1ar5ojA89WHTX3XqbDrMhfYDQBfYFnjGbsiaWDzNvYM4kofgtaz66Y8ktwFgoFSFHwXTqutP",
  "key49": "2L7qtnJ6XgBBxfTbF3ft1XGkNdjjAz6ACGVY9PQL6UCLm9n4fvju5DSzutcTKzLwu9GayTUSRjtgUJtBt9ouBbnd"
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
