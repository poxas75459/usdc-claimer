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
    "3fppEUpbXZ8YuJBSLxPHY8t459MbsHe8YFKeTtb7iu9FGdZB7wh1pc71GWNDGvpv2GJZ4gYsWtejyf1uBNnWMGDn"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2XwtSwNBTVtrtBzzWSnL2MBrPFCH1rsRegF3URUKcJjsyyAgCbmUYqZyrZ4eLP9XfShXRviFFy6NAy42ygjqjnXx",
  "key1": "5x5vb9cXitjrqP4iBztXWFh7oXhYboq8KYWxgLRn4pS78fYE5hRD9A3VQoP881Mqg3u5Zx71Gv8sdyt1NnbdNMws",
  "key2": "5iiD6Ym3AhAjXBHvr1F5f3tGUUPFQVmqtgb1oDnP7AtVqmiBHZcZjyAh4Tye9f41at3NgKrkEb1V2MD2mYjryYLF",
  "key3": "EmrSzGn2iwY17gU7ypzyQARZ4XXyQ5WfpCnknVF95nkpgj245WaRVW6Mt5PECmaQ1EqJqLPbsrb2LBxAkE15XtT",
  "key4": "5zWoAWd8XZAHcGwX9AwNE5H88EbD9uLn6MGgMp4n5RFh65L8QqMobrjNYGWBf1L1YcQA6hc5grjq1ZZXQ4ks1DAU",
  "key5": "53CHaGAkpC5rWJi52W1RMDM7y1x2px13r499wThNd1dp5RLqTGbBZdHmMn1ehtYXPXHS245ysfTzPo97RRPUzkNe",
  "key6": "3BoX24fsv29gpNHKhkc5JNv1kJd9hqnDk8kBtN8Cdp5RgJm4VEVexhc8KqcjstmD2RnKB8Q9ajhfGXZ1tzrQf2Bc",
  "key7": "snwZdwj67p5akL2d7kcvcpwma9UN9VQRPCaYRh1Ltk8mhwxLNr66ATmNFhY56SGabsyaRGUtfSZQVPDvkzNKNUt",
  "key8": "2ZwGKzvKa3DJ9SHdifLJ1Rog5VFxSy123UTy6PoPqTBENYCj4vcq5AZGQbQj3fE2tdoxe21Et1UwEjQdLzfV9hAz",
  "key9": "5a27pbhUCWmVqvx92TCgLxXrwW7b2KDpkfVLkDBPF3FsDqX8smSRAEYskbCxit3sCAB2uvzh287hC73ApRsmYmVv",
  "key10": "5kpNZ1fNuPHKXkFW9ED7QeLPxAXNKkPoy8PYKTw64WVCwG7dJXo9cJDs81MznJk7wraQA7v5wE9gBapygyHHBfu3",
  "key11": "3ourDkUWJcwAueVtwTzF2gujD4Ts8Uy944JWt96b94bXsgtWAwKXHxLkfWZYFxdM3p6FZAujwJVm63XjybdheMe8",
  "key12": "4yjxEqdBwFHfb4kWuqXQKExMorCFCsuyGHchXUtc6dcU3t1XcL1CML6LgXCNHEJk5veJXs4VoCy8e9vCCJn7Mp1p",
  "key13": "2g5NU2cKarG4MB3pQMpxPtND1rnz2srHGrx7aM8EgDKzhhKXpPPaoE7aK829Q2gjNLiTCajfduHvAqxgxYz1e7J3",
  "key14": "azykUw8KNhvYT9XhZZr7CFbYQkWgrjSTDj2QCQbouUcromp8Jt4ZWvSXLNtuhMhsz2LtMji3PD1HyJgZZf3kEnZ",
  "key15": "52fDaw8ZSRFbvZizJpRbdd8b2SNBPkXnbKjrGSReZyEgkbJ9Zi55ao4HfGKN1EJRJVZ1AiwKBgaCUwX2bxyYYULz",
  "key16": "3CosgT8wdUKatC41Na8n34ydk1eAKHERezmgd1X5cbWE1krS8CC6QyXmaYP2j1kfuesJZmKv4b3ze8fEHiZiwQh8",
  "key17": "5B8cUM3hip6QN2y6Tp3GCrKF7Ha7o6akqeNyqRsXKh3Q9GmLqDubN7cunb3125j3YAk7spMUmjk23dRCRtkqMiD2",
  "key18": "3GUuU4X895tFDPrBnHrtANtkBGuwYEteydeY1k9oz9dkGDJEkCdPkw53znF6rrap9HgHbr5GMexmGoPkfHnKho5y",
  "key19": "5hZCQtoE1j8mURTxYYHpR1CcLQJni5mNq4BXLHBZdVyVo1c1FNKSzesrdqMzRnPkbKkk3RAyqe2Tr1RZUPT67iTS",
  "key20": "5HRQ4ubHcyVibs4DDEs1rqREsTh1MShNRUx4PSLyp2WC5hHNtnErMSjHVz3wBmSAMtvaKLxaktXnYgmbfmbbHtKq",
  "key21": "VPrgWYFWM2CZGzRx57jfKF12hhawpjPXope3QNGQ48hPyC5qYiQaFL7rr4pvCz3iqQfCe8itd5XHg1oKqCk8G2T",
  "key22": "5nZbsWKppZraXRsSEvUmzewnP1UCW8FdV6oyhhqMJJnfXhz4cd5SDghmAG6gewWd7Y36U9EWTgaU3ueYqYbQHUuo",
  "key23": "5pbNLRcxwGwarVGafifmH5YWLHodWrc3ZQcjSvzKeA3r54qPL4q4YDLcJAXE8pmmSyjKE4xbgvWHVPk2kF9oBka4",
  "key24": "5BbxUUAfAWD1EbLjizWWPJ9Zoon8L74Nxrq2BhZuMDvYQwFRdVxuGbDL4Jpzt4ygZZGccz6LDUv64nY7QTRKM655",
  "key25": "67VdpsTi1BWGLhe46XjBZPjgeC9xGGXjSBnymg92kXB4TmmUWMaCABjH5saKo1qGY6d3GuLxjRRYp75SxQSyn7hL",
  "key26": "34nyaRo9tRNozH8mKoNTdF8mgNH8Gn6BytdAnv7c9AUQvmo9oKy2vWDnfRFJhg81LwNeNwbUrZeUJ9yazz1b8QNT",
  "key27": "4BbjeYnt1Uq32X1udSg49fXLs7GMX2AbVTDbPAY5kKeDtDmAN8xKx4d3WWJo53vKuLiLUwYQT3EQUdz3KSR4TqNV",
  "key28": "x3re1vhE6dfD33x8eXn5oMdxKFWR227YL2Fbe5ByFAYe8ynSPdxjVTj8Xy8fYxNJFfQtME9EmmnqTxHLarKhdPX",
  "key29": "2WAUHcjNLPwWFijjR64SUibAeaGoKniXQ8bDzaRfboGBFF7uHQtadRg9sy9JmQw9UCRHzzJhUwsqT9ohD5YhHpNa",
  "key30": "2XsWBrAggMU7xQiY9WzUA8Qf7LU5TeNAmrk9kTCFWPfepn4df6tYJVinYrRChgJAiyS1jR7EyYQCEeas7bisZhc5",
  "key31": "4FWg34PpET4H83tGQ1ChebBtXJZaDQoUTphoLDxj49BqpbopqQeQT7Agvyc46STrV3vhv4KZH8snHFft5U379KKu",
  "key32": "5oo7p5VZ751c2P2XBDUPK9G6MEm85t6ncNEQBXDg84DhF4hk2izP5fM1GBZpkAdagu3Chd5q3orZWPJT6eVEHLPj",
  "key33": "2fiTvtKecmhVhFJ39U4UogUPY5S1CbQKAU8cg2z4knUWjLXF85KvEt8mnWCmzokM1Rapn5FwzP7WPV9B5FDDzoWL",
  "key34": "3B16YNQ9oYNau1mbtN5oD1E2vHvxonyerWT1b3u7wc5kuNmaLBi595BBe2S7rP2HmTLZXYapjBLfH7cfXSw9mD6M",
  "key35": "56CNbZ8P2A1UBW2DxoAvqoCsSUawy4Vfbibu6fBRTysLPwZMVMc16NPHry4staLFdbQ1Rnedq7fxrh9VtwYk1ff",
  "key36": "2ZUWoZKjNmuhPzgQsRi63zrPYvAXPbvadBpGneReMWgBR1wRGztz31gx1zrzvA5r1SyjriphkGDuk7QWf2kHoXpp",
  "key37": "4DDp1KZQDJ6zSDohKtz74xVqYGadhdKPonL1nBNpX3zhRottys6hCe41uAjoKiokN8zVg32tpz3TEYxLkzvPJUvh",
  "key38": "7MBGj6GKmc8JWqFwTw9ppSH4PWYEEta6EHqSfmahyE95E62wPvpPbv75mcv5BLWExSGwjx8L57MAfG1zzpUGpYs",
  "key39": "3b85vP2r522r4xHkgE9bHEPcGhpzBKHhcL2VQiMGvgNfdbckWX6LYPC3yess7aWsrsRZkbgohyK5Yd1XjjZRKs8X",
  "key40": "Diy2BhQvyWbdnH7fHqX3h8n9u8ACC4waSq8qyXfRw8Q3ZeQyFKgcs3SsnUT497uKfDWWvqZLHgHkX6Mv7BWfS7A",
  "key41": "2XLRDvn3gMb41tedskkZjnz2bUef82rkJJBPtSRFAHw55bKkcnBLu6vMDmDLGeyjPDhVwtARk8EMaN3rm6kyqwgm",
  "key42": "ypo3wjPNcABAbBhNUe73BHMctoyuiGAerkphzCBXKCaLR6rwCpMPcG8ajHgBoaRy5WXN5HqG3qFUYpSmmvDswVR",
  "key43": "247cqmgpYgWxdH57BYmvDWM3A6mqJ3oDaNogLf4E9bD56yvLnnrnWNabwhVYLcxi7aMc92yR6f34e4hiZWBD4EXJ"
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
