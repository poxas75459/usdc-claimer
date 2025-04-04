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
    "4M8SbJ47AXouaXgCv62qonLGKpgcF3pLw4VPRg7ZEMqntYseZKEovS2CEtEY6KF5zgmW9XKLnAnY3qmDT9pcYXc1"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3bXChrV5zLfqdo9JWnfRfsacWTJoYRx9BWoDe3aPi2Nm7Xv9TMh3cWKQTyDMzt6Gp4WFvQaBERnbdNUgeR827vRM",
  "key1": "3vcoUF1QhWW5SUwZSLF3dYuYnsuPy4cVPCKKKyPcQJHMaBAqaoYLVQxzWB6A7QakGsJ8Uw6YkBpmfg3JbujFm6k6",
  "key2": "3ihzxoRS9YGHh3XztpyZ8ixwKC4puL9SFw6w14ztg7zR7oPVS1oKdjaPdsHAQ4mGQRPsnRdUTB8KUmvxuzBKLorv",
  "key3": "2XNbm3TanUEqUYSTCADmHy939sB9H7WZ4wTXFq49BQPzKAYgM244RJWjz6jqyoRkET9wfK8dUtrNCazDfvZdDPV3",
  "key4": "524xHrZaQrGcu5ZtdBEVXXAyUetcpa8LFYK6gNi4DtMkvv4ournUZGaZXgrda5XDL9xWPv6t8t89iN563agsKevZ",
  "key5": "4fRajdacQ9qHgeMmCELZNKFcwJpJtQZ4ofC57CYEKjfvoarHyPdGhpVRE5xKvRveNsN4GP98Z7GXAks4Yi3cCWnr",
  "key6": "5kbqr6iAnYgqykQzNi4GyTx1oamgX8wsQN7CuWqr8GJkYqLjw4im2VMtEp2Ar8nWmvZAwJT4y7wDpCvHnxp8uKAJ",
  "key7": "2zbpA9J5wxURKuuiNbFDeBmwAPwhMSfLsGLh9UseqcbXNpYUtqVMRfbdj4xeaUaimScESkYwDYGtkfyq8wGqFAHD",
  "key8": "3Wd7L6ra8pSXqnBF3UAAXL27nLT3NT8QN8EJwAdQ4HBCUKzYSSe9EntRnoRWViAnmoZBuqmTkxKP6SWiaqakBDzh",
  "key9": "VAXLQFJkTsWEG2TYegmCo6VwidEjrdTFuRqtuAk6kEBavohDPZW2dF7MTe2TKvitZPxHZ9KDsMvtPz3d3Uqrtyj",
  "key10": "AQ8EdMuLpZdJLLtquE2cuFeeaFfjNiwxEZeNrRwbWRPA4pdJQWSyPQJE1tLDaEMVyunubBXwkfBcC3bMtppb1YQ",
  "key11": "3p2ifdTkv3KhEFJ6CZ5v6gAtPiEViHinKXMgX4RuArYcdLRZjCtp6DJy4RfJDrp8ZHueC9fPL3fAFHZ1jJbQxeR1",
  "key12": "fN7KtWiDxgdaSdvrg8CRKHt6qbr8Mci1ksZT7NMr8otANd3PL9PsN7kUT4Qf6wga9SokWA9FZpi7nAmFAEZ8vA5",
  "key13": "2dg1z1YvVnUgwxsqzv3kgNR5TLpUspAb7EKJHtyQi7PLSNVvAXD8SX93XfU4F3Pbyjvaacvi49Vyv7joMx2oCcTf",
  "key14": "4SKsiPV3kicQFTz5yQ6uPDTDUnZ9MTYsnpmK7fEhpzbyzPq1qaGRKbTu9qmCTHPsK66fB65NbWJyjM3rZthJQtA8",
  "key15": "3FzAEuQjWQgQtKv6XdkvBcWTRjs4UnGaWhVG91heyWqJX9BUfxmAAfQqso2HAYGfGuLwsxPghVdj4o8RgLNLPse2",
  "key16": "2zDCGsFidQYqd8KxQSyuaACqk8XPoYdfeFPQqtHgQTjN7a2NkXKvhYBy9Kge1tvRvDQf1DggH5HGkknNZ6k138Je",
  "key17": "3HBMoCNNrNiABUoXG1wckJABgePbj2BVfaG6YgKunhPjnKfMFiat8rF9Tt1gYBpHyN8wQijziz3JQriA4344WJR1",
  "key18": "4fFa9dbhrvjJgAmQfSvTrqivpDMuUKQ4MuHg3qEb6iuK2H2tUX1FZ561spHLaTQ4yxqyQDnqSBJwh93bBsSGzsHK",
  "key19": "2A8WvxTS3yC4NXy3fZRhcFooQqdd4764gQeYcEQMWUYVhCP8VqSanU2RjUscxAyLUVgm2QiKqQa5bJNifR5XQeRu",
  "key20": "3ja4PxJNb6c4Ku7616UaEW9QjqutyvzbFBk7rmeLuH1rqMGq6STxzhVhRg5aNXuUxeUAtMjGBDNHR8Tm6D1UDTjq",
  "key21": "Q2iFz8H829THGH5hofmoXb11utSTX3q9eiyxBvqydbaQkWr2m33B3mDFwt8VNLjihcBcSZaZ7TCpwd293SPFShM",
  "key22": "4N5NdkCnjHKJeuDpXxnzVVv41JjFPuAPpG4rAATUKS7crSanQLy5B3V6NQfts75KSJMz5K8dDGfMVmZTruYwcUW8",
  "key23": "2xrjt9Sk1AAmsCiSGXePogwhV5ev3nvGu6GSuFPAZHrFSDqdRkEWVms6rjYzeeutdnwkBbwNyH6GPfFz8wXKTpbf",
  "key24": "2JPpnvBQ8MaF1JYS3wQcwp2oDwpfCCftBpmKM1UitRXJ7TwfmwUEvMXb9zXbPPzN58iibm3ZcUFGk8eviC2MMKA2",
  "key25": "2uf5fKELhLnUjnirdXx4VXsLBGcscm2Pey6Jx3ecpFDhBMtvVn8UAadYQDvq9tEv7RMpK4j7zi35eV3bwPeqGjq9",
  "key26": "5NgqQQ2sBuvnFNayhxtCnFKgk1v6GL54GwKTBoQwYGNbR8FbPXQgMtZ5Sm8a96p8kgwqFABM7WBvUihXkFUhLnnT",
  "key27": "5AjiQQEXcbGUFUdkyjzfiFuX56Z885pN3p6CKekgwvR8A7U6xv2feqkkRk3n56tGVmzy58KtX433zWWLMGs6MVVf",
  "key28": "2mVnWQrngreMYeEYn8RXCZX18cVquWokuvKwBR5Wzq5B1oLUrWxvtnccXPPcYvrW28LJSHLGCkQmUTecaj531Ese",
  "key29": "5ksETogSY1QnY1FgS1fBeFzYh8LotmuJbBm8dmRucDfmgUPMuxcBXxxCB8prkGipA36oM2gfyuga4J8jnzuyHqsK",
  "key30": "438V3aRnsysXfGUWDXWReWmgonmH9nmpiMeKFtqoo7QofaxJiu3e8PoRHTBYaevcJz2rqxepGRtj4dhg1whQov8Q",
  "key31": "5oqsDVC2CG19nnFUqCqDsAR5YP9PUnsfKtXzbCgkJdcjf27fa9be8wfk4aojyepaAJpt2FThqiYjFNdGhr7qfQjT",
  "key32": "5v32kZ5C2YVc8VUAws86qnNxs1FvWt2k1Ni2aw9BsTYxvxciQLCfEvfEHgYFzpBQEb7iMHMFewu7V9mn5Hdi4B4M",
  "key33": "4MJbb29WxBXYCZYGiXqSeQHy9EBt3iBEkqLwVAS4sAnaPTm96HYPMt2M7gzfSFvwn6wXJW742cV3o3bB11dDi4ER",
  "key34": "5ayacUpAcQckmX62iMojExKg9u5UV78D2BbEsU7oDrbbXYxbqt7XfY3guARPFzwqXT4KgA3gMgKhxtJAYgcrLYEa",
  "key35": "2SGiqAkhgSgewZb1wTLceEcp2DCSp3oL94Zy9H275CyNSiW8EPdMHG54KpZ3sBETwbHH6FBJGsxFCiTmko6K4tkL",
  "key36": "xUdxyYKNipkNxBnXb8yueRwQxofyegXfG4bdt1QApCyKvx4mAndECw5HnJzcUsxe9VyQ8rPSwje69RDgGzD9tN7",
  "key37": "5cJtsmHnXPmvWgEZyNhnT17mXJGWusZZ2nd8B74tiWzPkN8obMGNawMcjrBnPQp14eZDA6kHHKjRceeBG9e6pBGd",
  "key38": "3fQRZmfL31jfcVoLMKV1fgxUkESmgMM7XZrWMGF5MyHMFgTCAu4jtV7wjNM88WAqkchBtF2bHtpEU6rdj8ky1Ddm",
  "key39": "491sh9zoLdUKa26ueFGqLeZrcrhuNpqJu311DJsR8Tgo5kYygHxmATrffMMMUVLRVW4eGbx77vxsAdQwuVVqtTNG",
  "key40": "2RuPqGexKMs2XFkeG1d216dW2pW76D644qSX27LksCixG6Y9SHDaXpRK9fqFRZUg5Ckc4SEuWfUMhDsasgx4wchX",
  "key41": "r5G7RgHnmeo8xyURahTWJbh13HwzbD1vNEZ3YSKDp9LNWcgKFtkjRgg8CGQBexB4TCFeSty3fukpVH8vzkD8zV5",
  "key42": "5UsE4jFSUd5QzTf1hyKzXkd8CGkw5jrM9Y26GjgncUwtpVyytd54bkf4RoQL8GmEMAkZ35ubtk2j7AJC53PAbzxs",
  "key43": "PotnZ4m94uexaohraFQCksyDkp1VN3tJ8sdJhyvr5bfRAwx8v1aXUenmX1GPxTWH35nT19YqPcooHJ8HCBy6vog",
  "key44": "3HqxPNdJEt6GxVZo83HjtHFQT9RCyXLGZ1yQoRnstmHxtXbhnA6Tys5RAzFoxCuj3KdbS2SNqWprvMS2S7oEMgRG",
  "key45": "3wt4hAmDq5cpFXjHMEjhvo2dCZMbj9SuyEMvnZoYPXJDE6UF65fbyoVokDqXXZFCNfFM5TpkTbnoDAMgEEhqPAyg",
  "key46": "2X2qPZBz84GPnQMpWy3noZfJAKQPrLdiZPipGBEeBzi3DhwCsSDudTVMAtjzSokyTZidft3j716QpR5sFqZHWxmk",
  "key47": "355iPhJvu1fQ3zitR3rkjcg79dkwgQ4BEAUtrXSijqcVsfyr1xSY5hZcWv11gmCrVnoHzQ22yHhvgmcvU1fza1nC",
  "key48": "2heuzmSdZnaEic2dYKUbBi84yRH34HDCT7NL812SAshdHzAXjN3dDY48x1D5oDESNypzpDgK8qL69HJkj7PKTPxX",
  "key49": "429UtMf3q73RrrsyC2YLv6RNrP1X3N9rDZPr4BuBMrjtZYXHb2egXEDvYTWFxoMGU1SdxbdARcLFXH3ZPovnq5eb"
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
