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
    "43oeLmDaMEtcmmMYUQQJc5YLbHJGPvV6Z7CahkpWJCAFni6otoiEUrtRV7nuF5GxKGKWhaY7ADYVrvrWyXbdm1oB"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4HXJrkBVPPicM7tSivhCnRRSESAYm8caSU3M1VyBLbPESUXAC8pWJAmDKtYxVM8ht98uLG9hXCrSVGYF8TyUQtVV",
  "key1": "4eB5ZEvD7jcJi9wmCA4e24RsQtERVuu43nrounbAWqHxoLBihZV4D3g87GgbAjyQNH9Es7PTsE2nKQEXVQomyhsW",
  "key2": "3KtZQ11GqGzrPnWvuq5L35jYLmLMavTwWqKExzTHtF7Vean5bd6sz7VtaUxCz6gctYyqicv42xiWkhS9cVwZaz3s",
  "key3": "5ueuCa9jqmuwoCFiUX1sLh5Wiy4AVtADGEZ967nJCBJhvigstiPSRFmfZ3os5N5BfxRH9hoQPA9NTUAqLDnNT9Gg",
  "key4": "2MTizNLmTa3mkSWRybDqjEiUKuE91TGcSrNpZXrENVoqyFwjgnuMCqzsbwExZSmMt2aRXxv6jPsUbY4U3JtVtnBd",
  "key5": "5qogVvvvYFUy8eQW8B9dR5i5jcZunxqiodpmD3VUp4PWVhFE1v3cZXLFWf3eX6aRYHHcrwjiNP8v5rrd5JWvyxD5",
  "key6": "28CRPaaMQCKaoSUxyuLrHJT3t4RumVNW5TX8PeFGQ8veuVag9XbhDjQWLyfbWt1FG2CqfApjtSZQ3vbqyAWB5gzY",
  "key7": "4sJd49Dvg8mTEq8htwrQVpcgCZtTF5QQUgNBdg5MA52NkRwNHCBgYPpG4uouyoUaTznXPwHgZnabB5N2f9vCH1ek",
  "key8": "54mG4fWLoHnjjky1yRshkBWAUcfoqk6U1EG4PmHZdpauNbNkxw9PeoGQgsSc3JxS2smDBkwnzXT8EM8pMBQooewR",
  "key9": "2tGqqQGnm6W26bx4C1eL4bG1gUjbtKDPNznB67Ph4ZMgHUV5EmFjJVEKhDPgaa3dLHMBxkXFwLEWu8wY7VUQ4TYr",
  "key10": "PxnQwUftRi8hm9k3g89q1xmCqGGYExwNWxSEicPmKyhrXtMeiFZqEbffwmCFfatGf393aoxVHzgKmyye5zzT5Y4",
  "key11": "4NDpAZmT6LpJ7T2EJWJEdntaQz7Dv57uwzB316K4viMay1p2s3WSxv4KsMERHQ89pTiWaJNi2GrZRKAqofv5GWzr",
  "key12": "27TSWTebnrmGCz8bmPBeLiCxZyDWX3Hjqp35BRLWBCTqLjTkjZDfWYh8XzhyGWGiyFWjuXoPqjEuE5qSV8bSFeZX",
  "key13": "dCX4xdJkGsnWsJfjdy1gxynpNEqALyFNtFomYRqqCnoMb1R71txtwddKStMTepUs33iq84Uje4Jiuizrpz5S6U8",
  "key14": "4JJqJconaCsomJ1A4oRafPdfCeE1D7aQKXNUdPqyuKq9czApdwDw8HPg7bvLYTCBhikFsw9B16XM2f2uh7MQLUkw",
  "key15": "4KRf6yBkaAbZc3v8HsntfaxZNfNevPy9EWL93z5vzgQiNakSsqENKVaF8oVWExhnb3hydxxpSn9xo3FwJJignUgH",
  "key16": "342UTmE5PerFosdpQcYmqSUazFmpUaMuhhz7EeHVz5P2dAu4qktZ6G1Yzr5yrVRFdF87Cj8KUMtLE8AzmFqpPZzu",
  "key17": "odLAFLtjwf8NNPt3zhGxMnP42Q6uoh6xtJXo8iaDeXQQCNkNGi2EZLcjDsDge423VF11zi8tPV5fdPNJ2zBKSGM",
  "key18": "ruPZy422GanMLQ8U1QUyVBn5DNS3GzeDpyxp4GMZ2wfTYWGpV9UquJs4JbBxzZSZSJpVYP2h3VGGNjYYqRx475g",
  "key19": "4eRJLQrdoip3KcchCWa1cy5kseaN7o1LKoppCi9JDn4UQRvvDyBACGCuUbmF3UYQ34tsiWWVobp1RHjnSAn1phwc",
  "key20": "7uqcKjkxvEzJJ462UVjEXMDdvxH6L5jNAppwvHNFmBLKNEnX9d7AcRbqxDDDCeWJrD4JiHn2CrXTRpwWaEPRfvp",
  "key21": "2JntZhXNZUNz4PGUcY2gae8tLS76SYBEJrSSDu41LJrS5GDM4WZUWEaUZj1cKMWjHXpPumPYXxTWAUZTuakurfYY",
  "key22": "5fFk4vDUpn6HgnQ6VEhoXZ3TnKLfUWLswHabkuB5xCS6Um1txKpS3etqGLzJce8BPMSAfjXqT4mJJNgzywosTo88",
  "key23": "47m6cqChzVha7nWuFNLmD45cHngCMrjiWewdEGK1x2dX5Wdkm4YZswayakcUXj8GwhgWnAuSfe8yK1WsgX11N3cs",
  "key24": "5kG6Ped7mnSnrc99EqEDmfQT2zrWsm9CpfQBiL7aFRHVEWXurxxFQyv5hzNzQae8tsMFjyjRf4ghDvZmWtSKxgRE",
  "key25": "2iV1mbxUKoTuru1bzcnfonpZKxdnpuV53VUjg1KrjT7byKb7EjNWVvhmG9zN5eUDkqpF59yk42sEc7iHfEhExpSp",
  "key26": "3EVUvqyi99YtM9pCB4DCbTUZa2UqsdRHuVLPmsrMs7EekgHN5BnSGjkadbkLECNm5NMHRhArn5E17eDPLVwhKYo4",
  "key27": "627Kwm1DPbn8TpZcgzu2TPz9gVNs1nVAArZYaoXHMvQiXPQZEPc2uTeYvdHZdPNzFp6QZ1PRBimajwtJpM462UNi",
  "key28": "pYaUqkxJmFVsiksUrC2Czb4ztPTgMDZxGMhe7dZmw9gJebPLb6pK8yHZmjwnAMewezojTwEY7E9FxeYXPYCbE4N",
  "key29": "2g8mvwj2w18SrXLqjAKi6UfBRRqFTxk5iHRdxuzz8LgeejCPW4wvJg8ePXk8HdDkNwzLCNrtCRtTA8Pgo8x1BJNw",
  "key30": "33Nt1wvpZ4tCCVmo3B5aydXddxxTeEwfuur2gS6mjuNnKosGh69fryesam7K58gmYNn5X82XsuviV1yt3BExBrTP",
  "key31": "3VL7Hp1xGSE4vsKAYNifauDTLqjPwhk8wCu46G3LfnZ4C4iZBGoXuwQkB1wYfnk1Kr5TL83rjh3YbXPWDBCYVhGP",
  "key32": "2Gqg5SWLg1vtPdRnWjx9wMbEs5a4C14VuS1azSzPj8RvgxJEcpXPsfftps6nFKbb7JACRCWXwFXwcgyXwBNnoLSG",
  "key33": "2G3tJjViEwk1h8xbn6EeDyV5zDLb4gLjqDRn9zMXiYaYxtvrFbkdc36CEHLnNXe77kmQ2VQrNBMn5pVsGctLsLUv",
  "key34": "3VrRRtpXfXQWb1t3xFQwre8bSV2ySZcizEVtUMbcSsQGcZxcRrMj7P8PcbHMhbG2FpWUKWYjWQhv22pJF1H1Lv9V",
  "key35": "5WeKkP6fmgWuDzmtiWLcoZhA8LuFHYSdUr1MsNgX83bwVh5SvAY8SfX2B8R7WqtfvynoLbQhDUTfjysuyFQFgNpv",
  "key36": "vtyPjubTf1pi1d5MvZhfwuzaY1scrRZDjNPSyK6iaveiME8RGKqcy52oxUGcXCQZ5yuXGodyVGx17bZDHDuTx4T",
  "key37": "2iPsvxZntE4RR9dySsSSCfWTCycWcMibdJeKo1NQF5zFcrT1z3mpMXJQ4k2Nq6LB7rDegwUobYSqnqpvMYAuErqn",
  "key38": "3uHcgsprptkPsjqjzYrsjhSF4EtBW46jSizoWEs2hoHLoFLrgWWeyekiiHNz2qoKGaABDmEZHnBMpKMZywxEHXJi",
  "key39": "R1YFDQQNZuwY4ovwgc5rB7m8tuwYGogUneqoZHSt4q3PoEfQLMbTzC1cPrzzNvTWE2GAZVLrMwJ99Rkp1NJtP5D",
  "key40": "23KYTt958J3BF2cxxG27g1nkeFP7XzBVsyuS1J7U6n69LACh6LFdiD5njtRDNo54BFjtawTvfPX9tzHybU1a3Hq1",
  "key41": "2126jZgQ4L366vwSeFtZBUc8ZJhRggmZpQs1k9eYMVa97ZRFokTa8NLKR9vstRMRKfkjuJFpwZqiKnUZym7jHfVL",
  "key42": "2kBcUFxDo4XNF2d52JrN4erecAVhSJUi1geEE7KfNcFq2ruiq7VeC4r3HnYpNfxqCjqdDrvssYrdLGwNVjnx7ohL",
  "key43": "5Lz85ikekw2rmkJUJ2ZnkKufGNXdpyhfph66qmKZ1a4VwUi2DhFysvMG1eg8QCqb6KaTAB2yxZWkc6nuUy6d1Lx6"
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
