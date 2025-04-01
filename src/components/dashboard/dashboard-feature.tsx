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
    "5m8MH4zK3uXT75dHzJqQ66CxYjPagFrxUMpPNtc7b1xxpjinNkMT7Qhnwp2AXgauQTqS2yMb8ksaLpeYWqydtYyc"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "46upR7gSHhvxM7mc9jgye3syvvAUqBAQTiEUB2cjrgsZEqsJHoc6SVZh52mEdqp4my5ZPVn7GDXJHUQoXz3YeTjm",
  "key1": "2T3DGgPcVUmddL5XhKyRysEUj4pUk5Dp8a8S3DXosQYGSBKKi6qHVFccMBaGvnfCw3Hbf5UcVwSC4HM6f8XYszFz",
  "key2": "bZa7KRJpFjcXLx4hGnexxR6caPTMeMfCwebQ4ZSaTu7bNjeoQ24wZhnd1FWSHhdsaGeKcm794DLnC8AkY6SK62W",
  "key3": "4moEDivKw4smn87LZBCp4voQ35Vccz7ArZy3Ri6qk8whVAzQ2L1apFC3kEoBt2rLNLmi6vw4CqCM7A48T98vg8m9",
  "key4": "xDDGzKVssgXUNiQP5tP52gk79QR4tAPWdcWgpzzKHBS2ur8sYyRmuA9YNf6H52nDiUcUvh1yyP6DJbZbN8hA6sS",
  "key5": "62aeWGjzQqaz5464LWoihhUGdZyZ7aJvMBXFANu9mAHm1e52CKT9wEMJcw8CvS3pnd1XiXf2ZS3NxinSKxNAiSFb",
  "key6": "64Rg49DCrh85JNA7QtbuUU2938ZFYB24qa9B6BPZb2NxjdW7sFo2HuTQ2njWDMnTVmrBxU2mVqytjeAJ5CUAYvJS",
  "key7": "5KxczZLAUJxsZRS5ihXdumvNMsaVA79bM9rBsSfozUw3AvpMunrW6WCt8spWYBsXF7neh8FoG3RYgNDco86PfJx8",
  "key8": "4AQFax9u5YeMVrFwyC62QLx4HgSM6i6SnftKdM6QcUrgK7y2XJkodfrLxm3M9FKqdxnja9rP9j32HYjAYojVPGcu",
  "key9": "45PVqXbZCzdcy5tz35fnT9F39mLUDx7hcUc9bXDPMxwrVuk9UehDVY8FoSZpYWqgjEyZHphad5QDaXhpHXXNUu1i",
  "key10": "4aDtkbEz89A3K7QddMQvJvKUFBcJ4cVS4aQTR6KFgXaNaf18ppoMjhFXTt7CoVtQFSm7qUdGZjr9szZHAwBrQ1bS",
  "key11": "4nuySfoFw4uxTi4YNB7w1RhSsMC6gdazXsiCKqwecZs2TTREmJJowU8hjapwfNnG6M8A3DgWhmNUxEGzXscPRzQd",
  "key12": "8tpX9tKUvm75Bh7BwQ2WPy6U3manRNMAdtgjWSsGLEVuQoVMQHmjrvy6jUjZyfnWaZvwN7ctG1i9hoXTha1WkZB",
  "key13": "4koohGenmCuQgpQAT8Sa29byYNdiV79yiJXc3sWa2aP7pQ6hPc12Cws7hNjZ4XCF3n5u59Jxug2ZiSBruhqhzWbe",
  "key14": "2dsYvm1DiPFcM96ZQGFnx35zQfgddBiYpfnzN4w63kXLujasgoUTyWt4zwfZr4HUbxMCmY6YjUvzgK1pwn348LnD",
  "key15": "qdLAzDa6ikFiSRU4hNzwpQycEYPjzb994qS7mMfo7PofsmQQ8S6Sk9ERZmqMVsLm4o6a3UcXqxGjPGnF7mL51jY",
  "key16": "Q7CiS8M8tnywhzMfAPFuoNK2HCqNUpgWqUSxYcoiBLQAqUtJ3g6k9BTTHmorGYjTGzsCBFSKR7EzEaRCtzwzJ4h",
  "key17": "yjDgYsfmiZv9aSnpVBLb4qz6RtVmMNFc1ZwnV5LLURzFs63bE6oAK1RfuFDasv1MLXMDHfejPUdCx16DZZJpy97",
  "key18": "2j9j6Jcaw9M6i5T6ckCyPoXJEFAeg1VAC1FepUkKs44jjnj79D9XRR1Dm6SNrWaQkySajoswxfj19iL3rBgFQbw2",
  "key19": "5F7wwLyg2GPhckUoNYeCcYMzaEN3ZR24K1cFWWresvqXzmw5jV7ZMKk3zKzfngSwSAQPe544jZQfaDwysxWwMRaG",
  "key20": "pvE9gmaW9uofiKzeCeBx1YdwNLLrc21DE4w8UHcdwj1XkL2djVadbkByNsvXx1yKuqaoSnGMFLcGSyKwNtreTwa",
  "key21": "4G7JKhHNMjmh8zktd5tyvivX3ygNeAa9m1fdmwvpFyAd1AxFYLCCm9jqmoRkmYBjeYoTiSKzFJU6P5M6KK7VKegF",
  "key22": "389ovex45hSxu5iqkv4C9nz3dg9tCNG5vmkZFkfqVazJ4me4jaWBaQ9gWX3U87Py2wT8UYsGwsTRgVqE5s6VVywq",
  "key23": "543nnAdR2TW4mXR67WrEgNMgm3mrke93dcz6GGUiCDmVhWiN2bSmeM1EarhrcoYWrGC8oBsHLEKH3BVeRqKxGr2p",
  "key24": "28AWTHLWM7C4zd2TFgyJB8WuGxEmk3CBuZvapCiqkYQfecMT3fCK14YTkyDH67eLvwqAERMgz3anfpTVmjeMGLbD",
  "key25": "4tzFAoNuSp5S1hRFoewemgxC57wi7U5JWYoGq3ciS9WGpC5RDuUwfzhGqHwLUkcVkgU279gsU23ErVrN71d5vaEs",
  "key26": "3FTHr5ggHdpYo8io94oRDnFH1jKnqyJJDsAHKZfQT4pwnGQkWf6iDLYrT1FakgdnaTrz2piUz68FA5JVQnLxcQWf",
  "key27": "5N5NGdfXyPm7cz2tT2JBUM9Lmose2BQx7saF8uQuAmSJVoQSvsQEsjcmuMcpbdWnGzBew4TvDsNr9CnqdzyDTjVV",
  "key28": "4zZ93h2pxDcdYCUE2fuBFLxUvtumBHzVrenxEbHWDDnbzSZXzBEDxqoV83Zp8R6nPkBgt6zvc1EnB64JDhHjvm2h",
  "key29": "3LP5rhzq9FjvEd3c4jGMbELiefYzPU1H6StD6JUeS2kZKGXEKcoUYaF6gcTCwCGNg1vXcpewisVeQUbrD1bsXsyj",
  "key30": "5PoDgyUvtoG1p6FqBVtY4mnUZfVmrAhgsmbsUM8x4rodhs5kUMqWF85DBGEWwNeaeJj2H9MthUQwBPhASSGj3toq",
  "key31": "3GmhqUToFNESAmzwGxnkP8r6Zcdb3b2q6ZBgpA5wDJGq78CPB8KXcebT1MW5syTca4eoFKhgCX6mruTKvQXBfG5R",
  "key32": "5TK8sok7Suz2DFT7TEmTwox4PAox3TX8CAwYnXztywwqN3VyqAJ4qQqmGNdor1K2xh5mHGWoPbuA5DbkbJEszo7G",
  "key33": "238svLxWBajtG42JKG8kFMfBJZRHNxN5wbAaCxGeFc6oQFzGz6HGQJ4Y4M6sA8SWTxbmVGM3oFFqtjzVr2RcaMQ2",
  "key34": "4eXvpqfPyFgZU1odktiF1rbKRhyNS3ANwD5hM2ToLCukS67yoxBHSSivVNvioGsAYK7Za8tKSe9GbEYDbLStehGC",
  "key35": "5isBJtEuPuhnRkRVurmB3RBmBe5WLSyzo4JVppX9Qe4zAvLodWstXeAqiEqgtxFYwLYFUzqbsvtQYAFPa3t77yo2",
  "key36": "4MGLnXChTVQRNH568CqpXfqkVA6bDQL1SVpm1aUY7upuuebCc565gKcCZ7JUm1jEkzjKrCHKwMxd3agjEvCdB7Ka",
  "key37": "bQayhG17znmLmFeFKjTEB4DK3DtrYAK8uUsgueuhq8bNF5Ld2sQDvrsZ3AxodZCgDtoKRLDDES9F8YuaBZuVquL",
  "key38": "2qyuJ8wCMTgx3mwR8Cu1DbZbPoN9cjAu6gGMY9BEDBstwsbdQ76akxMNQcLq19452o4bvRw1SfApMgP1X3DWGvZ1",
  "key39": "3RZRB86cYk6T4aWk3Ftb5fJamgKRtTPrGpBRRht5qvaEy51GKYDtaivYrLy4NyD7ZZHLnR5JW3TsVvQWAd6ewi9A",
  "key40": "2PtLwUoe4Nbtz46nam1opvuJX1VqupMCpmsW6QCgGeLhcvWZsZwjLE2cfUa641DH1GZdKJi4WtQSDDmzCUCcFNFQ",
  "key41": "39chG9M4631LBGodCVp1Be9GXn1LzmtbnGmXitVY74aXeFKN8b1XJKTwQGcRDaYkgWH3bJMMdNfvgA31pSU67RfL",
  "key42": "ToXH9JnSpfrNSBvCya54UeEsXpi53J8Nktn3yvepM1xJsSqYvMFXPKbxELMiz5VgU9GLMjbT6JgXR7yYyJZu6Vm",
  "key43": "7ecLyNy6gN8YV2rEeHUcRq8HV9a8LMZF7349HQxxtRJDsP1s3UGAarS1UPnpMWLCqrm9irstT4wabxC56No74ph",
  "key44": "5eHZiSF9t369tThwsLWe3wX3WWwtEHTQwKTXiPAASb1n6jpLztQgZPfRMmhRVrWXFoLg8K7VdErxT5NbPQ6NcwSf",
  "key45": "5JTmHgjWthPYCku9yRufbZTMLdq7UN3DS4Wqg5nTFnKbNmAEVo7t9szERBeRV5PeNXqqPR3VPet8B2QSCUsmUAXH"
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
