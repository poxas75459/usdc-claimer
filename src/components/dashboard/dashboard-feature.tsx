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
    "6rWgVJkHTpD2NMoXjopxtjQCNFZiyAjPomoWYSi4SZBFunaTDG9yMRezq5JMDk21TmbbhL3RawtDb3cLzgJj1vg"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "26CCFDqcWncpVFLXy18a6YjbqVMQgBBHoQVxhCeDWdwBbi2qJGQ8k7LSWSccdSpwhHkwPexuXhLxaF521xeDjZik",
  "key1": "45TmVn6CJ78XZDX6qpZQdTrZDsbRQ4DPDWEvfvnjnRymLr9WxuLEjzYrG3obh4KYsBSV2vSCZcKuLDTE3fkpQi5p",
  "key2": "7BwEjqeEyFnCBpharheb7PyBMhRBQkTav6Rvx69ypdJEa2H4ajdXX3kKqRMj2crtsgYSzbDFa2x4jg3VtyBiChc",
  "key3": "gVUDduXFdaWERrsdacQWNL3kTnDcrsZPc9XFnKyBv2azRK21MAjnUboiYjyG5aBFzuNhaPa2VXZCQ4p4LdSkKhT",
  "key4": "vNbTkhDSa2oU8JKNWE2aTNceXQcjz6wt3gJiimW25o5n76J4JrFMj1ZvuTVYynJPxTYr3TA7X9cQPdgWBVp359h",
  "key5": "2P4o2Q7ToFiZTHgxV1J8mFTRFxPXaDPLK3ATkvtADZXgYZxpBtUsgGgEoDnunC9U3zEi32qkb57S1qKtxB37K57Q",
  "key6": "65wXTv9RM3QD8xjztyAXiokJzFJ64NWpXie3CxNSuaVzqYvNJYFGLWKbSVWdScahMQdD5HneA6JKYkjhZdXfr6rY",
  "key7": "4PbYAuAHiUbreCz7JEBXPcyWXV222rhwCdtfWXYDBBKLoi7rQ43m2T37J7qdWMAB2NX9hiEkmLAN1mBBQuiCyCdt",
  "key8": "4Ld725V3UJGS5Ug8DhQdvmw64mMw82iKoiV1AACAoayRFc5yKhZTEn7dWWxwSHvdeHkJmsz5JQUK3MmvJn5xizLF",
  "key9": "z1RGfdEQqjZi43dBGgYMMhbu6oMVahkCG8xfGRcGtKyWKWpAFuQ6VayBKsnbEUpgrj7GChKBiNSTac4FXHGmfZi",
  "key10": "2E4N4xpPAkPE4e1uYFPYQn8ATPgP5jDZir8TnR6v8SqWX8skPcimgr4qCf8wVzyCdcia8YpLdLSp6JFaRH9wqnCK",
  "key11": "r9vYk4BdSEjgtm4v1JWiBUUF2Bexo4ywUosUGjfyarZd9XAx6kVufkjaqjm2oWKrMs611pR3ZyzQX9phP5pVYku",
  "key12": "5Dthfdaby4FzAZMNJJYsWsk9wmqJbpCrSTw4oUrMWESiEKGntR3kQQqM5rBo2L9XVhLcQTuyyXVCP6AmKUefDvKL",
  "key13": "5vj7usgMbXqUp6anrVg56XqmMCDAcUuMPZpcFCSuFKcwCfg9oeCs5TxFELDFpUbByQ7qv4KHw9J2VwR7YE9Shyvi",
  "key14": "HRc7oeJZJMdbxVPL8bhMLMQebedBjDLLsLQf8BdFLSd2n7BzhJt32y9sTxnYj2MxUcbyc4vWByubunXhb2yAgYP",
  "key15": "5M4fdTGqZS2TZthAdxXuyRaJwqFjy8RqwGTrFuTBZXuCpQzRQY26jRBKe43cMsQv8sXDAp4YipQWk8pgPNCG9Den",
  "key16": "eLXGentasd4NkbutiNuCiwNAFn4ir3C7NDDswrHmtNAr3Rc3LjRNgh4CNHbdPU57tEhHUUiTW9uEJQZKerXtb11",
  "key17": "8iDY8cd1aSCD1R8ixtjD23KH6B5BgTFdUntQH3hS3Ry1DefrQDUc5uQ75eUCbvAzkcE9FqRaPHu81kvodMpvu6r",
  "key18": "5ABuScaDTTu529LKVuF9rfmp7k3bFPoeRGtkw4hqSf5WJcTo68v1woNrrd6G8pdhsbq9rscQLZyPEav5HrWQ3Xn5",
  "key19": "32KwcBEMy3uunWXe6onvdejuEf2CGMrgCanDh3HPKsB1YsSPk2aWp7pAE4cPz9WwywjFc3swC7E9r2MWDxX2Ho8P",
  "key20": "128rD6WVvF9VbcEQzebFFkjL56sPUQ9PDAqS2dFmWtbxyM9HZgU4oyoyqWug4DhzrYzf2NXHq4fguieZ7vWF81EU",
  "key21": "4qAC1PQUfST8fS8nqr1bKZ8yutFKoDUSkhKYNAk4EWNu55aaaxaZWvm7URQjqD7pd1WMBgsd9CU3gqvoVzsSNNLt",
  "key22": "xCnxLN1kvCEw8k1bp7egAuJbuymD8SQb5qgPqetMhQQveRTr1PGqscfVNDunBXvx67KfVXxYu3kBeXDiLBkhG9h",
  "key23": "4K6UCzjkMt6TU3hKT6rvn1ptFhRo529r9YfpiS6jGce2XMNw1bKyBMjspX4RSHvtDMt8HWZCF2vX5TJ3GU9sqwPv",
  "key24": "3GBkYyUjfAMKstKeSv67bUdCFjUSteCJwQKg4LM1UYd3XRg1rCqhUK4MQN6xEavUSoEQgSGm8gPPTeDBuKqRo3g1",
  "key25": "4iUjFgqQVxExUUsdABkRHSQahdfxPR2GZm9szaHgDjewdaTKKdYggWtMBhpTkGmCFqb2wAgwo5LJgCBAaHcjpRRN",
  "key26": "MSUUdUEKfGCCRqWhqexzTvSYm16Co5arFMegioxFemCm6YyfTMXuXY8uQn49jRUwpU382Nd292ZGQRTRmXESSnS",
  "key27": "3FEXx4NTNkwB2VXovtEhsvweGWcNcJoz4H5vWRZKCZKHrzT7FJks7ZpL11L8XrSzgRsqozord8V1xFcSW6ioUrMh",
  "key28": "6584LvvRycpoVzrFA529JGbWeNWSsjfgPrWB1WmhT8QWqcKgns4dYnAy1ePpXsNHH3GugeXWSVq84Lcy1gDy4cAX",
  "key29": "62mmo4nKV7Hy42BmpMRLNo9aXwhSdQq3FipmCoSzqeP9Hf3LNXmFCgHJcLazqv9YKe8nwTucuqUkitUuZtu5Sc5V",
  "key30": "cw76U6QijuwTWSJoqCHfhhrLUrtK4759LFH4TAvNNBokmeEQWwgBH55APmRdkPpZNXhZTDNz2D3VGdy9GNkmHet",
  "key31": "3Q1vUhkv4eCehWzKABgrcut64dtWquNRG5GJ2Qz7FZm95BjvnjVwng4J7rg4FPfgjwvLEVEF4VyK6gMcrrSoSUZW",
  "key32": "K52nfnHQJdzzBWY4zTPxWCoj21e5fqYBpsh9EzK1vseH3xgd7rvyr867tcXSZtZjwqxKpdH7uNYGae1MCnJJTra",
  "key33": "wQxzmxwpmrpn1oUPdLvhjsUukXj31zbqPCP858JhTpgTAB4Z4yd3bxEhJnhG23imTyEiPcxpq8z2TCuiaZz2boc",
  "key34": "2LXATuLBo11JZMZZnw1bvbEEEv8UtEMkdxyfnXdtNS62vWskjXH4NrypXpKtyqhvYU5PBAjiM2i3BP9BLHohdF4F"
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
