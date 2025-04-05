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
    "4ytmTBi3sngJhYSvRAE86ptQzjbUaXPkoPLVDwgLMH31Y2pu5V4Dp3d7vujMqLiWtbNRBctknb8YPayF7KPPxn4w"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4N9cn9hFpTBwNhNSYcxJ9ybXxEUB5so1KednLtm64PwSujr11C2aHD5aoGYrhQ3yP6UGcPCdwDEo27hyJFgZ3DAf",
  "key1": "JemzMUPMDwxY7jyWBQ8P76ySxHCLwDYqJXpTUytxUczSkuP1PxmWo53UePUoSdJsroHvu3G3iJxxQqAEsyvPCNj",
  "key2": "3wCkNnGPa7tTNG41Ys8nsjf5vwRx4MbpkVyu6a6nbWFy43LK2B4rxaEghKiexFDueVSm1K6aVtyRmsG27bLcLjpF",
  "key3": "2MSaPX55GJ4jSHC7VBuE7gQqKyeLTD89ik5GeZStJUssoEfHRCpoZiJJppieP1X4gB4aRrLGXvnVDhYn9o8LEsWj",
  "key4": "287AhB9LMgj9EG1LoA262uSNFthhLKqfPXevXcBGPGVLMHW3dGdLH4M7HGvGVu9ue2NxgzVdiNw59bJ87m5b6tcw",
  "key5": "599kvok1GAyn9pLF2MKYHsyruFF8ry3boXrahJwcQCCESeRc8pAziJcBanmGcZwaTt9vSw6Ks1bKHHHxeBEJeQQQ",
  "key6": "5ZNDzGtsueyjXzVerYH6BcydRAQEmfWxL4T9fsXGpBtv9g9TnjWeKKAX8dJhijuLtPgxuoz4wsShAW2Bs43MZSSm",
  "key7": "57J5BvHax3YKiiDZ4iDi77DUfzcazCxW7zWpHVpvTVikpBPtYuKZAufosNGYkUJWKv2mufpeobxs6Kw9x15snnQX",
  "key8": "4rueF799oHrhSFkdwYkGwunQvk11toWFFj6k6ZqHvyRzBzAghV7xbtCL3YQyLDFaY2jdCiUS4gExWZ6U16YF5ie9",
  "key9": "3TvFWujX34qd4CZsKV5eaJXs2mrN43TKFGaVe5szb5o6mfS9uG7uQoDcUvQk3quc3nfcRucjPK5UR2mrXr1puEyF",
  "key10": "5KsCSfjAZ4BN3rbY7Hv2mg8n61mWCYEcyJ5eqJXpyBB9M1yyXwLhkC3EFDT7bRNiTKEyb195pyYhibK49Zn2qKrp",
  "key11": "2MoLXT9L1Y2P5SvdSayG9dGT7TRVqtZnnXZGB2uAzfKMiDbEUKQ9N1JGJGefguSqFquk8GGR9Hw7zWgU8T3Gg3jM",
  "key12": "58XJ6dNAeUJcKyxEjfVfCEjK8GsBXdPJ9RjiEHj8yvTKxSLXxo5FjyokWwkUYfywRiSzEsK6ejX52ssnuzpBZk9a",
  "key13": "67HUpJ2F7s2jX3XQo6tYrXQ5MUGutzbx7KV2wAnz9N9rJdEjg5kbaKgDGMQQWGPjcTKMb13LbRHN2fdNd4JahDYe",
  "key14": "2UeMny3yoh5fCdUJux42VwVoK96c7DohtHrmqpbttVKbxzecXJfUrFh579dJdzFEaXSuo5fN1JKxm4v3y22BogtD",
  "key15": "5yo6VmmrB91ogFUXtHXFLnU3svxMHUeXxwaq74bhRwAsdNFA2iFNB79aVCkzcVNcH1nL2SGFsdYo1MyDdM9nXg4z",
  "key16": "2TaYwdcKGQ2PHpNcdbKtyTWbZLYQgpTXzHC5UkpJifBpPaC1webeWtim57XGHvg7VZ9S16bs3K8F9s7wQv74xdNm",
  "key17": "5cr8TVANLuaYLBNAsb3a3wCAWyZ6NEKZfcDR62NTS7ey6Zeoq3JLtCiAQGAmzGf8XeaxQM9GiqoFn4DqbCVFQfJ3",
  "key18": "3vq3tBw43ssBRby6WB6Kh6AbgmnaohuJRHRy2tsPSqFv2TGDGxbYcWoTsC6zXMGWR9b3zMn1cZomAnz1AhZMZFjL",
  "key19": "397JQfkWFmSaEXVhbiRBAn7XPC9WSqPz3JUJugzh1QLSDU9X1MJvWWYmVHgHc3ZGWgH6sACPC3berj9r7CRYXasG",
  "key20": "2pccrkyfvSsW9R8GwR4b2LCHQn5LgeYXRQ5X4rgZFvy3Cb47Fq3N4Gk1Mux3RZLqTbjk2dAg99pBUm2SSL88u2s1",
  "key21": "4nckAwRsAoKwEw6ZDWbBcpMsDyBzQGKBfcH2xpVxd3rknhucdQmkNC1tWnDR1uheAf6iSL34WSP8wjhjDSkZKd7D",
  "key22": "46fpU5PhNj3rYQhbzWG53RiU7LFKcZ8PBhvWPxDiT9ayKwiR47LNabDARDJgMuEjpJE4aLPMnpLmyzEsN6FpBubT",
  "key23": "2sF7a8zpXJRzJw6nigAgPCE7TJEBXhoYFsWdqRpmvQV7UAACSUrjWhAEazkcen467w5qukSM7mvcomT5ViKgKY7B",
  "key24": "jD87uDwdSWirdkcZQSWsTDADHnBTkKJu52JRqxr4KzPUKpQrHpN9KC2H9XTVtb69rmFAdZYfYGxrdkbr3xFe9eo",
  "key25": "7Wr3vB9r8wHjiekZgDofwCJGmSxtbBf2vWkXFXJn7V67AuJLfC7xEGDoipdy8QXGb8KXQ93ZK5jor5kqtoXjPn8",
  "key26": "5pxWcuHCqM4qHEvvp9fFCCn3PFyt3hfXb2XQtQPWLB7QwkcH7PEhAej4YK2LdR5dVk2fBcDf2LASZsx9MdbvGY74",
  "key27": "29cDrZdrKTLDVSxXKtTn9sfWN5koGGn4r3ybyTNhMJQzUeUxZ7PaktAXi4aYwvnz5bdHceHgbouuib93FxFQKTPy",
  "key28": "1SpYRZRbUEuAYjiDKqm7ojCgQ9fVpxbr2tSB3H1eYefk4K3Fmpd8ssHRUR812brckBkMC3jXFSHfCmniv5ojLyU",
  "key29": "5zh7vc1h8KNu4PcaMZ2j6sfQnEfTZjYHxHLu2bcHtbvcrL6w6oFGM2rrcddnrEtPuoaq64LvHLDNKh5YaBkRSJs4",
  "key30": "fL1Wiz9JESWEhSHwCpqQJyG5P4fVPyDHSkjmpfMUvTpyvySFpe1rK8QE1QMv9xVkbTHY7TpASMad5wr3RhH6jfr",
  "key31": "5MzWv44XmWShp6wBwq2tE1dRw6zsGa9yfJQP3pBZm5sc7MJHKeHuAVTJvVdGTHfa8ZajDd3b9kruiqKphzhoidiS",
  "key32": "5gst562eL1gLUxi83CbuaeMa6WGaKkqTVj4aV8MNpWps7toSFMyEgKnQJ5FabmkxifqbxEjFQgkQ6LdvVRbTBxX4",
  "key33": "ZXExQAY5gWmab3R2ybmbZ4oiUmFbHE6EfAXac1ivUWn6PM1U1BdMnUjiQJxkhZH1NF9MNhMQdV3A7xbvupPbdLF",
  "key34": "oYMZfqQx3zveELH2U7oh2sDa4gQyLstcRePtodkzwZcRFgFwbz15379qvR25oKBrHrgEELA3BWJyHnYf5FR5Mp5",
  "key35": "3TmHyX1fkWDtdZYy3MRpmLfNREaJTRBSCfCUUMSEq9dWbnGb4JtqCm3EHGyr5FVqWwQdKxw1NhZEmEHoJzE5AwT",
  "key36": "2bAsRUcLsReoaRiYuFZRb4WRQtBWRmmHe4ZjQyhP5kmHJygm3tmiPua4kfzc8YUWrqpeUEcK3gyYkUjzhACo2UPh",
  "key37": "24hGYWBGWCy76Vv9LamMnxXNYXb1m5tg5RGkxTPNLm8iJfXUuwfeKFfd6DZJjahZqML7fd8Lq7hM6xjQhaXpVPtH",
  "key38": "5hgCLWDavRCaNkzQz5LENiH9ZZrEfxjhimDpRGHtgyhoFC8V25nVhGKKMb1naTCUxbdZc2faDEWweQuHmzMwYBVx",
  "key39": "5FeqzU6Z3vt5fW9VUpuRajjn84wg27bpkYfgwvnzAAs6X96VMXzxRnDj4jogr3K1QgZQVxzYojkihZvkd321G9f4",
  "key40": "5Gqtvbef2jyD2iuJHZcRqCeSXzNRuHfqbGPjmjEcCgHwsZ5gPd8FQwXZgSMfvzPsv2UyK31i1Tk5a84rrFLgLWE1",
  "key41": "4PqcCF38MjXW2oAGfJPexnD7pD4kDowsrtvLFXrKsSg4sZjXeym5zWPa28PVgj4F1vtDiw1BHT7XjyBKxux7p2tP",
  "key42": "4wbasWczFQ2TPFUAsUtum33DKwxCrL5iD8bwZ4Gy7w26fRQ8a1DXLvXM6RCvfPxT6Sv48Hu68dR6UHkviSWB1umB",
  "key43": "uRGhkLiP96aQ73MCpzLkXGakdsVeB73fJV4fLKK3N86rHq17vFkmzajqGqPFaczBpVYwmLVugpg33jESzRnVyvn",
  "key44": "PJxYtwFgm8biULNNd35izjbSSEbGA5Uc62SNKdgwSmrA8icKyUFZW322soKvjH3uzVz1EkjPGbDfkNnCSYmFRJD",
  "key45": "4YCFj9mcCVHifx3cGcbmRjFEVmPg83r2PV3s6mbR5GeQJmTRrQae9ZobJPgET2xarseuMpkMTCp1Aead6KimHpTm",
  "key46": "4TS2bHgJd26BQbREkMtU1sRE9u4mkQRja8xukYGkWS2utkiYn9Z8GBhtH2SUyTM4cGQcsZrripDPAs6qdtLLDuzZ"
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
