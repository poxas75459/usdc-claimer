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
    "MCcH72Q1DeNBo43oifmMirobqiVmdYrRd6fNqgeSPuuqE9GsWtyZrF86zZN4mud85U8pBwz5t6C76Mt3zQ27d8U"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2nVQRBaSohREVCBfsdPg532rpiPqCzzvQXSfCW88V4967Qx9mXNu1xidXARRvupAs9teutquAvfQPkKSygHjZEMZ",
  "key1": "33BXegsCfANs1HFHJU7VNJv2QTYqaRDJ8fo22b9bbGAh47uvcho3pw6CuBYG2G4MN52EohP6wGio2v6QNoGfsEVv",
  "key2": "5GvqcZ3fd488SWZ8xXofvF3kLoxQQjB8aFrtCaV2x5Zk6zmwFQ6eSWpQvdD9Zwi4iiz34tF6VwDqdQoNdsyN9r5L",
  "key3": "51JRBz9LVH4Hfg29itbqXR4F87N4LZ9j46FxMo9AwGoHy7FL8tV1CjxcPsTNcUtZVxteAamonnWzXMjQyu2QwJNy",
  "key4": "2TukqSsKhxAuGJYyStM1PcexnhZXGhyJhjVHAUdgveNQwJt3mn53zZHEzM4DE3HUXGV7kMr2MBJPYqXrjuMjRNH9",
  "key5": "mHn5KT4FyQkp3ea41N5iPgyRFwFzUECTiDgEdMKWG69mqp4Tu9iTky2t8gDUeyqHJAmxxcVQ69u3WQvPhrp2xaC",
  "key6": "euAcm4jhaQrNq6CSdnuotZ2Pi3xgoxY8V5hC8tibbUEQuB5YB64GJvFp5kegm12SoYtroZiMneyyaaEKGNb8WVc",
  "key7": "2xBDC4JEo6HPs2Qh2YPHCNnQNmJVEwqVDtavuKJkrSfdRLWPAoqTUhhU4C6sJUnREjgAW7EJEtmcewXuWjRUDjU9",
  "key8": "3BmMLMToQNiqbK3pFw6eA8nErjbC2nczHH5hmsvk9VcmaMVs5ixAYNSSJmnmuRVnegsHvHcj6uyfeYLnLMwcWRXG",
  "key9": "489j1yEg3geeKhSyp49UyeDdKBxuXLfu8DhrNQFRpY96DrqQKe2VTATqpoRgtQu7EpS4NdgyvhRv9trGXnQ3cjSU",
  "key10": "2ywSg8AxvUuebSXXjwJnv6ykrVUXfVdS5xcQD5WHPrAFwsEvKDNJAQNBT72E7Yi2oiVChewr9hQD5S8Rp5gndrs3",
  "key11": "2Aa5rv4bLf4QAjC3dJmtvj6RTmNdoDbNFDdnUojEGgiTGywQYPKaacoJ3mqjwu682ceGG85tLnNmd1GpW5p2Ybp7",
  "key12": "4DNkYq51tvm9Li396y6fJzhh5D3GdZgKioGngwHQv3ne7oS4vYdmobroxG9CE3j73uyMjxkB7auDeMAfFEcLNfPp",
  "key13": "cYQnUbSzL8yLt9AYThtcm8EixqJSyURNQy4yjYywzVDxh2VWygVVYbsD8ALVxsTTjF4XCz1mSWHGYYL1HdUGaip",
  "key14": "2G7yHmRTqoPErwGGeHWHvPgA3gkFz7QGAzYkk8rrgamNuowYcwJgn2DvujskH5Ldbz27cW9mfDLu61k1gFm7Xygo",
  "key15": "5hr73eoNjqk3nHVCUYMNGT97qqKmAmAJes1hukc7UcYmAkizz8vmFfNpMJ5BFJULPdd9xAaAUMCGXgG1sQQbVdCX",
  "key16": "23hVs5jiX7Mv4teW7AmN7n6Qiz9rPZHCjGwWYnpK8q5p6SyM1bzc1KzoqvSnXpu7g13DGLYykxvEahcSUTMfxKe5",
  "key17": "3fpJiiFTbsrk7hR36BVGsbxu35zi8Qgw2wAoAkTQwGHenThNH1S88i7LwQoBJxarj2Vmq35hAeGytSPU8R2bX82k",
  "key18": "64gmZswaWNgypzES7BFnu73R3TUvvUVva7qV6S8sZxTJt4Z3hyBREoudJJ9WZFhvPzaHmQSUqfKcWDMGYysEkHKB",
  "key19": "3ba4jwkJmujhmCNvaFRWAisgYy2D6GXmzoEx8HLJwgVFkxKaS4X2XGQheeCpW6Nvv4vKxp7sXsZUvdn8qz317aAm",
  "key20": "3H2v5mjGbc2Gd8Le6iFttF567gHCkPJRDX1d71dYFPAuYVhfMcPF7MpCik9BH252trYZ2yyVzYFgFxNxMzDJJ6D1",
  "key21": "qiVH5DVT5D1QadG4j747jgCoJzQgu778Uqd4E9GyXkSDu67wcwx1nR2PJvsiErPw6vNGRVrT4kKXB24Yq4iNQnE",
  "key22": "4pgSQQTB9VGnDufgecSKPEvyvvW5hvh8KJKr6Bjw3fh255K8XbZXAnHpsCCgF2ShdAQ373pso5p6p8NKx4717Zmu",
  "key23": "36Dc3bVQqZXTbBTzXA8vgiijFBxpbbR2NQxzHaiDd6ar5enEVBEKBW7sfSsd9WRzyganFCjk8ZFYwUgvC3ym4mko",
  "key24": "x3yjmFYATynA3rGd9S4bVCY7Rr8esKxmC8GrtoAMv3XLsEPyPvq6PYcJCYVorzd2fgL4PFBL7iM3niq4MEHpQsH",
  "key25": "398owDxVYzDMNq3nXJLgRcojwRuDLSsRZj6wGbA8V9T7kNzaof4xnLTCeGiH2thLi38kN4eQLNwfqp9RXCWEjoY4",
  "key26": "3w7o6M4ed1miy1s7E4f7YKyMcRbU7tKjiWT4j5DUYzXaNA1jSyPijY2zxwTVNfQhqV2jVrBRhKaJBRniYq4VEtmd",
  "key27": "kfPwoxHyZ3ATeCwbA8KFe34ZLToeAU336Memje4PPVDAsX27WZ1LCvHpGbaSVinNAgrsq2LDpZG1RCJ1wFyhcht",
  "key28": "2dn3tbjvHXjVA2puggQt5bqEsAtFVwGoMLQFCraj3rGh16uD7mqN54HDRXM7X2vCWfnnRPf1wjL19A6CdH7cdpf5",
  "key29": "3VZSMHdXdEj92kR1ADRS1sVxPFwsoYkpgfaoeTAqrNfVwUpxfCcbGVMV5pY4QALDwA1cimhKH3ZntXz99Qh5amog",
  "key30": "5a4AagqpHcQibk7CFvcM5qm6vG5rCCsMQNxZRpeQcXfWPo77L2DMgMsSmcGYXKah2PNPYGckxvXjde3tYa33QgpR",
  "key31": "5XWQUbuqcHhZQ8nCicESZnDVvFpcpQjkFLCEKj12PqjgzJoEnrLxJzGccWurBQvU7QCesA7qJ66ZpEhXr1pSG4oN",
  "key32": "3BjPLTPYd2j3PgkkFZ2i9VoTsDjgtgEVUV5Ud9QeQAFHvn71Trre1fsD194EHeaTgewuLt2Xc2EMSih44tGKouMw",
  "key33": "2NPL7dtmdTCobjaTf9Jcn1gADPZsqLvi8YtKfQJhwo3CUeR66dCPEez8oa2rHE4miTssnmhCbA181eJH4EAcunY4"
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
