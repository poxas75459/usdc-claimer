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
    "27AXrfbLtKCRfzzWarqHyE7Ud4oTnRCir1gPg4Jxksq6Ru7SDffwqT6DBMoMDgbCURsRBARY3Wgco9svwBG3L38J"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "hF35RmaSA6yu566LJTBn2siNFr546EKtTRLLmFhhqPBYk3R8XwXUyeQCLhoPcTS3E9TVBAPePwyVVJbrYmRYAwf",
  "key1": "R4nUBQCsT6pd6vbuRqUjt1ATCxeYnTa1brgQCmkArTLkUQXgi3VJxq8DoiHb3YzQNvN7knaFdY73zZAqDjm2rvC",
  "key2": "4RhZbds8c8P6nowuLFQ8e8crEZ3s5y7gSAe5Q4ZCqtr7CVUKe1oA2rqMAxq7vPth6d49PUgJCRVnAYtEuKSahZW1",
  "key3": "411sjz2Br1uFTrCBDzscDbdSdzV6SAhtN5w9pcF9uPqWCoHbD6jFqV4rBGYz3W7NqaCF2rxUcvZrKEkSrRHNihsT",
  "key4": "2Xtx1TXzreKKs9ecEQXwJF8QzYYSf84vfVQFxu4H3LFGaQZNRFujrMHavGGWHD26e2jtXjkPbj9rj3d8tMpjZJt7",
  "key5": "qHjZoqixRhcHtWZFyu2MXMurHYd8ByUa6VdBEdUhjYcKWRtEcjDLe4sEGCJLEvsBHkijHCbSSoQcAA9cyochyBn",
  "key6": "5pVgX5KPQtZqC65Nk9JvqMi19BgNYntGrhzG71cFyVFVDtsbC7pu5qBkArNjuAaehgaST6txHEqAoBedpUykNSfN",
  "key7": "5x9XF7jCFunkbu9wgVQQRxAK1ef6wdbsP3TNSbWcFMSFa4Cbjc9moxitjj22e25eHZppmyPKJLvrC5WFpmMjWCF8",
  "key8": "3ddMDxzXQLBztPGtVHveNa8P18Hz32QWEUQUQgi5h3eR684nKMGRMBvj25e89K2DCdo7sp9YJByxcdbdtRoCivFR",
  "key9": "2qqfyQddMgSbDHMcckA6Q91iRYFEnL2SN66MGYDrr3jFdvLEwU5KtjZm1g4s5f9RjFjcBeJXAVWtztEnd8gCxN61",
  "key10": "4cHyRUHnVgf9LADTCBVi4HBTEw88C3B72x7gsjpcHx5RTHiq59Zgm5fPAndtVhLZLXGbdf3H9KNvrtRR1jexSura",
  "key11": "3rS9TGXdnWMQ9arAU39utJfDmBDBwTNExqGSonM5fYtugEyomfKcBcNQULjEoSkqzF39RLayZrWnUqDKwivkekMw",
  "key12": "5zTDt9FkpuxhWcWW4ZNEX1B1RypZwRSMQRCQ1oiPtnSFcahr5EY77UpRCtdXzRCcFNy9qfyCWBeTydPCyuYU4ui5",
  "key13": "39PvPpjx26fBCaVZWuLnnD9XGc9Ju9vvgzucadqPQvrJ4J3VpAyJBcsanTDbvRuGoovaL6CrXGcTSCeeWFPQHtLM",
  "key14": "RGE5j1bUZNbuJYcF88p91imjmiRJzJT2G8RdjLaEzVpn2VHn34CZUzLBSst5G8dYfBYQ3Y9ivNmacqyzS65Zhnd",
  "key15": "49V2nCQm7bz1HgZJGrWupAJsokBi3EJSE2syFWgUE63a2ZQheDpZ2a38XaAbFnMC6FEaJoQL39psMsgiTEDufE7g",
  "key16": "4B2LKxpcWtWrtp3uMiABeLzSaYFU7m1Kf5mFntj9sBGDCAV8mUCWepdXP3dscKMa3wcLQHjGpxr615CpgAxQmzWz",
  "key17": "5ZEVRpYCjcSsRFgkwR9MinA2SBNHdwVQLwN9jmwTBa2cQb4gMUeLyY7tE7GCMk3rrKFdan4vq9JqjAg8f3XDPeQb",
  "key18": "47w3QkvY9YKdHAtpuW6r3ct2Qi7KQrmeGHtCUzKHqn2mk5ZdcGywYtL1NEYSn5DVYapzb14CWnZPUd9zQrLzD698",
  "key19": "5BxfooKM8Q7pwcwriTwBiYfviupuVLhNAQeBRmoD3g9x1xTXNhJf6eVZM6HGpyNhwv5WstpLhQ6odDYqWreNhDNb",
  "key20": "4qP9pXPSSTTenT1WXhSoJqUS6UrLYiizhtfPqu9pKWp4EqYHpEANGfis9wd92cBmzksicaua2ntUPSUVEx1XsthC",
  "key21": "4XeG5bww7W5HbZo2GeBRF9fxcNxC7B8USt5AWSamfuTQAgLPTH6cabrAa4qbtR3qzS7xnzv31QptYXoifqBepdKy",
  "key22": "3PkfUgXzneQKkYZpcqdGY7GjGmYW8AjDhPW5TA42qCyvi1aqkCGq3TN5rF2YoWFxAsCKb8s27WMFsRPyzFkNvzfT",
  "key23": "Xi19iFcsbpdmTW8g7gVFHYtsniRD9Eps9aYH6oYaNyuruCHTQHcMipGCcc8Dqzig4r5xyMBYdmGQBz76aMb1HrY",
  "key24": "4pcfWU5PFAmmK1WrcV4CS5uTk4hmy4RjCLxqMAEnoHzEz5TXqpZcRQ35uwhkzp1bQR5pi4KZsVYSbxQ2wriUtt4b",
  "key25": "5Fnz15mxTLD2iwqynBUqTnxDiUaNiTfrFMTR8mr1kqS5iTVAXzMT63ng5EZ1qt1NByCZVsoWmgpLmgU2ySgNSaqm",
  "key26": "xR36r9krXpHX2EAHbNav8BDVHbRaoNLSh8BTFTnR88LGRa2sCGzLVvTCRPsDTUYfWhpKonBQxN1ZmJM2AawAV65",
  "key27": "2MszgCrq6kfe7EaLY5RNpygMg9RkrVV8wQmcw4nLqXFDTFf6F2qw3ZAMUxNL7oJtgrry9NDeNjodb4FfzN1TYRFq",
  "key28": "KQYpVGkHpeFuVH49gfN21RL3H6kv5ATLmJ9TYvGurYMutbmRGZXpFv17Lr2jqeUP4ap87fpvfXGCUU1BJi9d85J",
  "key29": "4Vu5yrPuYuV4DKuSTLyaJFS2MRaznRjRExfQF7rYBQgV63eMiEgQHTvyJ6TVNZhfYLucWhDYY68ckhNRUB5ideFX",
  "key30": "4PN12NGNHLEdW6BT5b7m55Xt7UhSdrT9PkBXWKA6eu5r9Bk9CfPd77oaCBaqiiSqCpAujtAcBSDkTbaQrTEumJe1",
  "key31": "38v3R16Ww7CuToQk815p5vwN9VRNGibquFe2WX56EXPnyhPCgKPbbzYYarNwiTQJuhh58c7y3H7y4qbnJjGP3Knr",
  "key32": "21Cmt4JVwsdAAe1xJRDSvLascXqHsWUAw1xs23NtJuHpJ8oAAnph4JXB9Sak5vWbjABCbsCWYc8mf2Yz2MYZ25hq"
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
