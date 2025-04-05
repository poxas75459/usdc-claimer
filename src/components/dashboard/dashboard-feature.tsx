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
    "5wzK1fcJyPod9BvhyqCT4NrnnyU8uyoKZAN7oFHABq3mrVsoUVfwh51jTwVXJxLh39VSdJK9YnRnDgeyNq6Xevqg"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "vDsixmUvPonYd3StG1Mrg3iwpRWbKmDsYRQiDJian7cjidR6TCjBMs16HYge81EwePbZ1Mxrj3zKUrZR2bvZU9w",
  "key1": "3CUs1vXkM9DipQx89cHrrNwDcDyuFwiHvcrE1b6vdbHKRZTashK3rHfzhpeGq9UmpKPBpGGo3P4ecJ4L28cjvw5q",
  "key2": "4xpqMRsDHEDV1rHXmivqxGrarxEJFxQLqUQxe3QKm3hC49NotBKU8nS2hfReoTn5sfTn9HgU784byaAbvtkjS1Wd",
  "key3": "5iPqfGBs2WrxpNeVGH2L3J42pQnhVWNELkXnK6NrPsXLU9VWQmezLEBrtUCCP2LLAdEWJ13dRAp3HavhcPNf2ERT",
  "key4": "4GTDhbcYUQ1fTgsFE1C1UA3Vshyy9i1wkNgSi4MbJxNM5sYV7AM4cKPdZh5hi87aCWLb6HsxG3je83mvsuYWh23i",
  "key5": "3Q55Ky7xAvxzwcXwvBwHq1tu1zcZjbfgEGokHYBb9mdZebY8eJgkoQt42WjEXwVSKuA8ZprHFpM3NSzcMkLRKgaQ",
  "key6": "2sazRFokzL377eUjddrAKPp7GsMnMwuJH5b5rMKwffK4sPKnV6fPYzQdNftg1SvjvdEunNFcuQoNU9mwgmiuPmrR",
  "key7": "3pJQxeEbcVZidNUFB4TnnBngGLqY9C2LiukU7Ls56x7eLVN4JJQ9i5ZMYWXREWMzMC5T3UeaSQ7VNSsLiiAeWDPK",
  "key8": "53mnJ7jPNsMx92HURUtpQseBhnjE8BbtZVGEvrQGaEUkRrFDytoJEn8hovCNQ8ApouKMbuvRxnQP8f8uGhVH93FW",
  "key9": "5rYJd5bySvap2ERkKdt4ZsYYA5nk9vwcgPX7JyFhdyv9H46E8rku9KntAVEDFQdPT4H3XMo5qnmuAX1AXGs3YSU9",
  "key10": "23je1Y5uUTHFA7bNNqn2sddgN6VcPfyJrZwoiko6pSDs2cC6sPnYsVEv19ahKgCkYW5cBNYHhkU3s5bYKWZxWE2u",
  "key11": "5BDng4Njmo7LQDdp4VRt5DRVPPE62AfgCWnveGKRpRDqxLJcy1WFFvhejWchXds85j128zFmxKHiCcwV4x5Q6sTn",
  "key12": "4ksUnQxEaNcLW9bxUe8iRREUtb45YPhH1A4ZYEvuLGj9AGZXMkTCcKGHDNWJ4nQBJvtHXezYcgQy2kcA1Yjrj3U5",
  "key13": "5fQ8tq24upTLhBKGbR9LBvzfJe39p5mTFEWxsYwX8L8hejkE6m435WZbX8fdAMfvGrgtuqFsXWMtW8tiEF4tr5Ge",
  "key14": "2hCCHNw3dcAttU6MkSzppy7HkKhqFheM8bBf5Rt7ZhHqDpPtXeMU7DEdVveJ4drobg6Y1okbNc88oZhuRaymk1TA",
  "key15": "4WyRoAcKJUi7mXmiWZfZj3u8jsVDzQeSZSbftuMBvCfGtNDN9ULEsv1ZcxTmz4Rg4TUAQfZFtHcSBGXL2Z45h2sV",
  "key16": "3c3uY8CE3VtMkhEfC5r2ZZT3AP9oWNwUDjmC5aCLfNBx6tnzTudeKCwhNsW2fuWvGriTjFktqAE4duHd8XKn2dZZ",
  "key17": "4w1fqSMuxSajqNF7jDB6xnRHkxT5ZcoG9wf6J2Ardf4YatWLFxvpkm1HV4Q9aMEokSAf6NPzKfwxxqyF35XiUV6C",
  "key18": "ZqrhAdAPix9zDBygJmXkUmv58f7y9xcdTJtinCjyo2bEKwJeYQYSBPkbrtYaUgeF16B7VhLffZxFFZNDyUAvQRF",
  "key19": "4TpywRMeSbY3EvDFyUhpTVkctBz2SCeE8kwse8WzdozPvLBEg9kZCWTfv67S4PcUTiuUZjK7EarQvydjH13Veohe",
  "key20": "2M2RJmAZyiiymunzpCTJBBwZAsBEZvdGQ6PSeQoyP3v2Vciraa6KtGjdczBhrNxNrmP1QjA8BVL1hEoSySjEBtRW",
  "key21": "AxmvpAVNiMUMfysPWGznBjhS5VsgnWsawahQ2bFZitjyjavu4B89wU31Xik3YejP2Pcxkd5xP6XoftE8GNnJLTL",
  "key22": "ZSSrq8gPNa8hdCP57vTEQwc6SrZuAyGfD2Hv71aakgF6bXQ7JMsRjd2djiju21n8Mf8WVnjxnqPp8gFuvcLZqxg",
  "key23": "3mY163HJti1nTcKP7oE7ZjKyPcxBniAUgXCmw72xUm9BMfErv6o7NfimAVoZ2toRNUGJxQKpLwbrfB7FtTAqU3d1",
  "key24": "4yFkCGK118iFVqT2kJ1vhAsykuR99nkoVrTBrQXokkNNKP5iwSggGCxjTveEX2PHET43vs9dEtktudCSWvAzmw1",
  "key25": "4zsxTZFT89gtfzb7dbRNn2d8UK21jzUQXPXtNr7khMATP6VHi2GCR9zK5ngxjJKzmHPqZfqUadACaEHe9zfitgpy",
  "key26": "24hkQ26PJzoTHqnFxL8q3Jm1vQWnSQyQuLQ6ah6fw1qqJSKGdjFM6TVYmEN7FGbPnAeirN2k9hsFyZSSjha6j3i2",
  "key27": "3tVqxvriPzNXUE1qzPRBwBc99RLP3M9MrgwgK32ER68hb9bHwMS6nownNShzPyxM2MNmi7AbuqmwYTNTvKUVxH1Q",
  "key28": "aHxrLejvVBLzBBuP3TrsE2VC7cCfnEnbG78cfWNfS8yDEwDRCL6MPJHDuhb6iUHMb5TzW23fKgteFbXYabYqeCo",
  "key29": "7Kq7e2C88SN27Mm8FzBnjzqbugF5KTj3SHuymsXBfzgz1bw3Auc7ZpS3Z77GezT8abTFUxZ2aZ6XE1qp7ZLzsWr",
  "key30": "46DUS8znTJ2t55bs5LpaHNu5wiWQJbfgpHuxmpRGjGEMZDpb88XqMdaub1Tqv1fmwAhriJUVs81ftGPwqfaP6N2z",
  "key31": "3pvkTXiBE7WbMMk7atyTmeTr1xuS792cWCBLw5HTx1Xop812ywidMM9uaaGYZU1jMAzeTnEeU7YQ7QdXTUqQmhxt",
  "key32": "4rWTA5j7YWjMKmzFFcHew1HVWVbCCidtzJBsmBj2LoSxqstApYUZ4VGWLQFGywRorhi6sVgvoCsdZPPaGY1zu85M",
  "key33": "2HC24V8hrrWo7BhFUA3VmoPe1Ttm2XZgnF22McT6usT9zjS2LPiV1scn6Kd1CUhHUdR43ArNmsrzjnVJmoYwMjtS"
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
