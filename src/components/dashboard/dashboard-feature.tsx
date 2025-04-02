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
    "4EuxGDVNvacN2fqjvJkgqMuSoQooyuB23HRSmjwy4i9QKM4sU91SigN57Nb5CwJUDKy3JhrVUAmfPP8gATwcbj81"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2p4jjR14oJYRW8dg8JmnNuW71EjDeUniCv1S6CBzFgaqisasEhqyioKZUbPE2zuiCoYUTJ3Pojks2ETQF2ZEWEAL",
  "key1": "3Cxwyuc7ixfWTvMRk38kStpWsxT9Mi4Y1JTJiTFWDhQwqKF1K8dbPRWfpoFKCYdzwh5j47MrfmojtnR7K396WsTQ",
  "key2": "5mBqwti3x3xGKVmxWJYtzNpCi44SRntdvTcX6tnsoCPYFxsyhrHWNtmwXtitU8z87CUgpzsqnZrJp3VzLcTsJsM",
  "key3": "4tM31bew9dRnwj7FVVXi2WCfPyzEEK1dWVjE6mG1d1u4KuYT4JoJ1UhTGprVnzjUkGmaLB9NEPatXjPXrWwoV1DC",
  "key4": "t8kgXUn6ffTN5ysvoGoiBH1UV4hjPqtKYuPEMTfnvCHB5VACghXuWEEs6UqwHRbBtcYgFXNMkmQgWcAv9QJXBbz",
  "key5": "soWfuXxeqJuP6Qn2FVeZnfYHFmhqJrgATyvTyvXdx7fyQDMtkxUpVEzfU9GecSFZx5Mse8KXP8XDGKwfLWdm82Z",
  "key6": "5zdFP7zJRbuoiZZgcNU9F2zxUiGdm2ahtemHTi6zQJC2Avcg2DPRCEJUkshLU2jmaLnhPLfpEUR4VP157hKNQsGy",
  "key7": "3WhgtA95Yp5N9rikUdpndwY9PpoeM7n7LAhbvDS2fR9QMZz1aqwuBCXkUAjrMcntyWd42byonCqYzBNFPeaRYseH",
  "key8": "2WzeQ9LSDd1jzLPcTkrvt5jyq3rrGSdFi4M5uLrdjG3N3qVGQ7jCm8PLkWrnSiCErSuzVnLW345pTpWvqK5PKSXg",
  "key9": "3PQ1dcEc49x1MsVjJzeCmogxST75abvtiZbfxBhC3e5XvcEgDAipU85e1ASAorHkByETaEvp6T9RrB5rtVSVG5sz",
  "key10": "5RKRGyDs1Dybxojq7wcWmz5CRK5WMEHoYJKHDAGe5eFToS5FtysyK1dVAUBnkCNPtmL2yzRgf87YV2VbZFVDRPvK",
  "key11": "bdQrA2LPM7DKEe2ntsKjQHGNEjY66R3Wjx8QgkxZf8Qf2ZDnVDvxPXJU7Emzacu2d7BsE3mDFupJF2miizmUxzj",
  "key12": "32cnMrv2x7mPuy4UkhMbWXHPNaPCczF5ry2P2H1GKueRXF4GyKCoVZcE6WnD1wMFF2EdiXoByRM6xPGAbvaFbq6B",
  "key13": "5NTkyNXhcoe5g31hHSCRBx6xHqKfM5x7ZcSMLd8Ev5M3fit5YUjveLXBH3TpNxkk8ahSFMt4XmZ7PukeGnvH4YFB",
  "key14": "3zSYLTzKtvYAu2YSzsfUan4A7DjbKsn7BBdBXXyPJ7M2fwcWmg3t8PoA5yL4sUrsEB2kxueLCeZm6M4VjqAxs2Hq",
  "key15": "4p4wDqRM1MgKKg1NT39ekmnnspM3XRTNgXfSXMnReF2kL8aZ8bgSbEz2pjYzNN42uAYVrNPARSBwLaukNpTZ693E",
  "key16": "aQVhLWxDKc21UvyGj7mhRJEj8NKTqREHVhRpsY9jiTEL1muxT6phoRuzfqZJPWCUa8fDsVaeUkGjzcrgEgSytqK",
  "key17": "2jC1fixHGbordofi4P1CoqdHQYn1DTL4Y11W7SkncTgbBTtos4pKoHFtk5ZVGd4KqzpBqrJPfknPj9uTN5tqdf9G",
  "key18": "3cJgesHWXqhcDZq65y7YbkPJ4UKh4vPExRmvNeCDoqfDDLMNjMLBTTZBGE7eYJXptheuSRaZstYHNrPUMS1gEP4r",
  "key19": "R5yXCdpF9dhMv9k4mSwX2SBUZoH1U96QmUYSERAgqAJiRRkKnAymCUtMyouB8nYB8fi5UA7WWDKMqXsGydCcS75",
  "key20": "2SQChFtj1pfsCWrb45ohfEEhiyaBhRwtTE5dhZ3KEZu7TPkmQTFoUeTRacvv9n2yMLAtfncdzYcJ1xt9yqygwkE",
  "key21": "3iPLYXu61UjvNGbPP9vpCCxwQZoNzGH1eSx2Ex6kvZkfesXxvMid2BmL4Lhe1K4x8BpG4DjppByGeG3vYBtWshvM",
  "key22": "3gL14M5aNn4GwJLLUW4iBpFP7mXBzKEG1jT46Hh45Mx2gQnf4CvGRzBYYtM7dbhW7yBaaMVZ5EWArVrbVhtNTRuZ",
  "key23": "5Mt91jzwkJsMvBaV4D4XepU4BV4eP8pPN6bCn9asGyU1gaWGx4FyTzcau2ENCY3LLqetPGNcd3CuMU6NKraewi9y",
  "key24": "4ZBsxM5v6SgN2eaxLsUUrMHGNyB7gvqDM5PtDUwTDx4VbnDq8k6PkRAwau5hBKKbiWxbPwgg4Gn9YDyNJkQbbtsP",
  "key25": "4PuoY5H8ZhzftVZvaLDbqeCeGZPeJ53qeGbMTSPd9JGCpnQBjRNFZFg8EoguDfWi45mRAmF9YKjaA89xtL6V39Gz",
  "key26": "67oSuZyHUX9gvk4isM6BzruB9aCmzyinbyLox3ssidKLQt49z5sRou6kYr1vx81vGjqKE3TjNk7ASyXYbD6dU2pq",
  "key27": "3SsEATiQqQe1Rz1Ad6dbdnesBfRwjW5375WrbFHMpBG2m2pjhpYBuwiD4Bs89QWwEgo3cuANeuZ19mp2ZtvPWhyx",
  "key28": "3VHuNLxxrGoiZ8jbKJCZePXHc5PoMLTK3iZfAW6dA4L5KmY9yXsQWHUgTzkCNLWLn7EVQxvwA8MyNgqtf9SiDYPv",
  "key29": "3uLi54cSXqx4qXFhwjtyNxNQFZLUM5DwbHMCbTyWLKjnZ7fKULoV46xgrtiTzMHaJPHibPYYGXCsb52nvKmnAtJF",
  "key30": "3Zjr7vYMySaM5tsiBZXDXWu2BCx4g2kxJp3KbNzsmKh1UTrc3gnwyTHF787Ba5qxvQPuiJa7uqGkHQAGSzrZUFtz",
  "key31": "4zPVdBnCNPd5wF43d35jkVFhG9kevFeaSzJr4zbWFttK6NHFms44vd4zRBUiqnBWqvVfWnjAnvrBwpJkBZhxUXC3"
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
