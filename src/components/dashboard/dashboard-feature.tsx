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
    "4tZAfRRSZErV4YACwN6ZPfA2qDjHZ1piHZJfnF96WKqL4eDNHmgfpwWn31kjpHHYz8cgJ6r7Ly7uXEoWtEfA9cQK"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "H1yddc6tCU21So8WqiJ23mjkJLNkZuauBunR2uULcJv6osXe9nMdSj5KWzs23R5B3PERAGrYWhv5PatYquyEo3m",
  "key1": "4nZXG7pCx2dsgAKUwzBgqDVYjL6YMGhma1gKpw9YHW5ddEigUrZY887EkgbbvoyZY1V5aKTPAq9hneGBiPwH176m",
  "key2": "3JZ5VnizXSyTUQs4prb65vnDYurXMyUGvsvYaXE6PnJb6nUAZxV6HF14EWNqCSyJz4uhzDRBqRm8y2WAdekMi6Tx",
  "key3": "3tbmhvaaiuBFVkchU3qsP2jojMwXr7SNFBwbLeZbYzdGv1u6dFN1o2srGc5p4UgYrxuq35mHB5mWZWu2iW3b7R3F",
  "key4": "5coYzipjLMEG6W7TGf3zenFqsyVfYsWExQUxnmZNHtuUN1CddhzhnYgwNtCPtLeAXrfdJWpAU2NY4Nae9JjrX8eE",
  "key5": "29fqjvPaDdM76yHX5N63gg1UUMeCTgD93NcNeKnz6a4SdZPXoECu1MH1iohx66j2w6NsbSTdrAueuCdgQ99Af9Kq",
  "key6": "2efEzC5Qo7tAjDgsMZc6BNAdsUsrGcw4TF6r8uLVSAcejbg9Ur3aBsomgsWi4MD3rFBxBzhch23noo4uwoGqJZMY",
  "key7": "8q591tEppd1zbENHo8Lw1FHHWrbANfAR916Ui3J5yy1p1HZeFvMqSch71iMRtgRbSejaPMmk2Fytmdu993SynaH",
  "key8": "QAUzHypCgn3uQDS8eoqfp1eBU26mb1tJNp44GAUYfsfjpuHuzN3irEcTqpJnWvUESiJQ4tFEpdrSh6qj3fff5QK",
  "key9": "2V5cW93zjHYv274WTfGdMNGe1P1JJWsNhWRjUWgZppZ41bqMF6gP6TyM2afq9m3Y93KWJvfsFeHEsmdcEUoNHwJ2",
  "key10": "5P83x3twijzmcRn81epSHGZFv3oNX2wcz2WVjAsT4M2UXKW8EG87TcCYKE3cpoYUHEc8TUpcpQaoiT1peuH6A8hx",
  "key11": "24vKLZ3AXkZWLUvmUaHhWxBoFLej9x5CYmB9nL4oALthXryP9R2ALMQYEKYJV1wzVKLMvFMhfWUrJobKaareuUQc",
  "key12": "3SatMovKe5hskbEkaiJrHnyEcK1VGdt9D4toc7RCEkVearwE6BrVuWVWmwxfktYvgAGaT4KSRMukZB9feDsvHNrZ",
  "key13": "4waE9xvmS1cVKSo7XQzPYi8H3FrxbiC61NKncCsgVe4hfz6Sem74hwGJNt1mfiJyWeXBXQEajYbBKgbu6qzQfkxa",
  "key14": "4Z1w2uCrW1U8PFBQzx4hdHBDCgr4A7eVDAQ3SQfWpvTe5DrUdUEDN9BVC5TtdZaiZfppVJGbfBT998WmFhn5tUa7",
  "key15": "HYsU4qGc4CD9ZsvBYafkoET28V1jNaVdhXxcoGVW2FSx2pMBYGU8wwemjARw8qxoyeVWxWguG6DcWejLAYEEgkG",
  "key16": "2MyTBcq5hLB3XxtCeQhyVtB7o6eZZ56i7pBgsinHZ8Abhury51gtbFmviSDt9fVPG6www9xEBd6TtJHcvdq6knBj",
  "key17": "5nhFkCCrbCdD3MikG65mDSaXEigf3mX8DkjWs5gqWys5kER6i7b5hTWHpRCupxLeJuMWWza5AeuH3LPhHuX5ZJoH",
  "key18": "5BbZSWwQVuFaAadb1eD4fsAVpeQ8jxH7e64pZ7UpWJjGCwwAFeBMN8g86wT8h1BGDytmM3wZHMC6oYYruuLGVbGz",
  "key19": "3VNz8nt5AhrEoG2mxLv8sXunHWWvd9hKddgsoWuAqfzKdLZv2R6mbNxqXNDXML686rxuaBLDYHQ4kh7Yw6upK9c1",
  "key20": "2m2suWqMRusz15BdX49Bkdfqa1UUyL6zeedUELGkx5TGC2dRqjSMVmKWeaogK2EHcky6DnQJPZQRUnMM1qhqfvBe",
  "key21": "27UmrhwuGGkfJtECYVTZ19WeRp88YGswZ42U2FMH6HYLAjj4SRt3mEaB6iMnFWgoY77Ncd8JKMJcjYaZv4kn2vsq",
  "key22": "qM2DrdNEpH3eD4PdFXb6SVY23C9J3z3h91YVfF4r4VZqJuBS3aC6Jnu9jeVJTJxj6YCqdbgVHaJCZWyPcGtyeE7",
  "key23": "67b2Epk6mLNZhgtb7RBvbEtScPQYs2frHYyFEpqnMwgaPp1zsWMc8D3DtALoto3mur7PyDad7ja7EwiQ1oteMH4o",
  "key24": "oxLGgDDGGugVUDiZaXvr1EAEmvx6faFwEAcphszayoWUTukgYtSLM9nxjVDREYPBdpZGAjmJLHuaxZaYmB52zJA",
  "key25": "qjuN1rL2ZQXCoamYj7VFDoXXBhYzomHuR7uJqQHqtBnj6Vuegxd1gXT8MF5zFbszeB1q2TnfwMNFwFNwm2cuWT6",
  "key26": "25CDoNx1x86aWbLnxLGXNLJjmLNw8448xPRLoFzs9JdqdG5m6DCEi8z65ic8Mbcw4N468dugx51KwpmxrQxMpUdp",
  "key27": "4EnBsodLZD7ouFavCZaSV4n5KruSZuobEuedHvsb2wS2eZvGidTR6RiVNaXcC6SPQFoYWso61pVeANBvnTpHpN2B",
  "key28": "3h1GPqH5A5a79YuUCBJqhdVhiqtFJwceewsoSCf1hC2moYwkWv3JrwUWK72PzVwgPkTryt6SmTbtLe8oToMP7yYP",
  "key29": "2erYRA85muActwhGqs6jm13Fjk1EiRnd9ZvP6P6d8TTJJ3URwG9XXtHa9xqSwhAnqMyyPa4o8E9kD9doHAKR2nDS",
  "key30": "4dz9LbZSeesHWg8Gk6xZxXnaKgJ1eZTwhi1fYC661hPyEd8MR5Fre4a66Mee8cMofWZp5mUXaScbEtGa9jtq9Qxk",
  "key31": "5ZGMrGjUxcyNGEyDsYsbVFugHWiLbC1trUyHbo55HrVv4c8V21YZpCeDFpEbFfwY4rqnWGodLUv7sjCgzj9PosLa",
  "key32": "52rEXu7xrhXHWbwKotSyHygBAVZvRsEpYBfKXNDWKfZijHeJiX7dxGyewBeUAeroh7sqM48xjFgxuH2asyoYY6cs",
  "key33": "4wByDfyrEAqibXNBbM2brw3U4PfydSiUhg2A8eyneY8H5ta2H77YNN9ASYzDvi1ggu2eciW5m6bXE7jbrhFY4zPh",
  "key34": "549Bdey3HjVK6DFKTk4cSaqv3MCE8yaARVndTwasc7EKQbUmejxmvksHVpjrGgLZZ7m71uuEUgTsGhNbhdzKXkaE",
  "key35": "enRwU2tPd4m6Z9kmaTsot9yN9yfHUbk6DJW9kMriesbBiVynmPM2xFysNDbo6pY8tGjH6fVqfBUtpDPiJHFaqHz",
  "key36": "5WcFiE6xH7frkirEbi6PWch2kKjjDPMYtfsoqjMDnfZee6AK6GTm8mn1sXmc3ebwQ6JQPKRhmgauWANay3qpEx96",
  "key37": "5KeME9siZoXxbjudfvapRy4aWtc2AkZ9xcLef51xbgHk9XdMUn7i2puoQqU1tZdcgrsvYsr21AciozqjKQZrQBJQ",
  "key38": "58XhfTestp36s16x3JTB7inDPMsprzazXHDYc1tfo3x9YTHauPjnrMpiQRSSNku96d9QZwV5TwBwfHRqhqBcWRnS",
  "key39": "2Wiur9Xd9tBdkdJC362DZywcdtMWDiXhUuuE3ECgUaQidgFCSNEPDKPp2WuERohVyzyYAJBxzdhMR9egrQtFXgEJ",
  "key40": "5E4LzCuSVeSNoUJXYv7kvKYEeF31MrzrHcNC2Aa7dcjJVytBP9jKADPY6nAQk34JisAeV5UsKoGM26cSqeUojw6w",
  "key41": "4QETfhuCjdHw3Mg4LFd2MChfUaZABJeqzenrzSwhvmoDQDgs2AJSb7JC6Qxpwc6HvgDzntoxxb2L7TdViRVZMmfJ",
  "key42": "4DBgab65YGDoiVaQ2kqphY4xGwmap8ba6kT6n79QbzRgNWLxPfzoZdoQcBLKnPiNjdZkdFSZS8UAxHsQiWA6fSys",
  "key43": "4nQW5AAGfHsNcmhm1WjUyEF3HaF6JzHxkWghW6urEcE1KTzqLnNknjcYTzFhdgvYVtAN4S62ikoPDwqDGvQ2Mxy4",
  "key44": "dtAYhZPjpFQ7CDbW3EAt7orK1i5yq52eAJUdvpFaPfdenx7tLwhKEwTmvKhEyHRf8wrypcBcxyVUPHnrLi63o57"
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
