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
    "5TRa4SV5JfQY6PeTxjfQheunemzMqXABWC59hZ5J5aHnotXnCgirn8RS56fw2EJsnca6TioEpDXoLnDMKbjCrYMk"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "JGaYGXmnfvgschKxCiNVHxoH2HrxBZRQ4NrT4QmLG95jGKrZt41u9K4ZGKMdVnYMbGLeFLeNpvbSeYp1YevuWfZ",
  "key1": "3PNSxGxjczJp8WR6fYaKX21k2LmU58jnzNLfZ4caPMZuNF7NkMsJvCCnfdzypBoVYM2L1Q9MyAz1EKkBCKNsPC8P",
  "key2": "5v1Hv55v7jeuTTPG6W3nmk6beXM3jg8WJobD4PAW7ZRyLbLEnqcC6jtGfwGw6zJUJKgM7P6yzJRYQ8K7ihXkKqA8",
  "key3": "4Kf3hTDrnzm4VwDvFZGKQLUern8KTRnNBNESLW45qbg3qQoP6D623Y9XSMzgC39GuxbQEMHhhfa9rMKTXSjYNwBB",
  "key4": "4K13cqV5Cxe4RqYeD2KWLRNmeVMumd1hRtiFBgknohLenbveEt5aMf4oxZhUSjyjYK5oz3BnUcjpspgRtfDB1wVi",
  "key5": "2V8QV4iLWRW1wcYohW8ZnTAVGpPczG4r8qfuRE6DKjQJiLsVh19EwkYf7YWEo6QNPt6qxVReAhAYE6EZ2TWAmjmo",
  "key6": "4oCQQRtxjM2mBkStsfdDZKap5CqGGjj5KBQzk816AViJBD4kTBCxFGzoYrKGRCHtBJXHxamCCQGuqf4hGuM2RQHL",
  "key7": "5tpus696Qthw7dqdrTDfDYuihbSFUFux6uzLuAZ2HpeUQkNW8zRM7J5XUunZt7aCHS3URNT8HymG54AC36h7Dk2V",
  "key8": "4aD1UihpQp2aRgmgtKLyrsa2TKNKPSfPHSeKinRykcBipq85NSuCJqUo2EwinoPgVRvswfEUDPMrEzM7fGZNpkKm",
  "key9": "47JBnxDeCdc4zxXKJAz9VgGwgLZ8SZWY54GAqUuaZ3jPT4Eu1h7ywvXhPHFiaKm5pw2S9CNwDkdsYV7poK9ZyJ8s",
  "key10": "21QHyVuApAKrxGM1urbnmusHVk13Y8nfjUbnrhKeMGQx7F6oPz8FMJp6DrzhgsMRthZdhGxa4QSuPZAeSrDHhY11",
  "key11": "5rQVaVXtM4DFgbM94Z7btCb8zVcbqhByogyZHuRRYnfR5aJnof5YJD7m4gMjwAsZBuznFjVvH6NnsPAyA38S6fYY",
  "key12": "2QaaHNb62P3K4bAg14i7gyCpzGikweDSYUxqz5cpJi2FX56TH4WkyqgDvXMmfjuBuLxDzea5DcqWFiPz8DoMzga1",
  "key13": "5FssSnZqeAR4iZqkocs6Vx8Tvr7LP8YV89FrHDE3UhjTvgRnu3i6Ftw7BDmr1QJtz49KeZ7aaYsUi4ghHDQA5N3b",
  "key14": "RebjfMEMhp14wWpwmxgyHV6AxwqX7oiHxUqrwn2zuTwyjzJDxEZ3UuDhs2JrVkq6vNc3BzevjYTdooERdcDr6Fb",
  "key15": "28KsafqEfoqVPvsttPdDaNGovWKCCNxmvBHvHfkJgDnKAiUVhVWj3THMLYneootcbMsr5WyjngG7vRWDN8RfLv5H",
  "key16": "2RnVBTQvzcfvaJh7nk84Ds4Jxuu8iVkYX8qiFZXDbee2hS5C6j7v82fsPycWSmLFd9xd9kZPf1SeYA8vkxYioX96",
  "key17": "AXpmS9ZoMxxwQEKNJ3bcYNq5rLEJ9RFV9kNui4PGZEq5r1sPJJBo5axV9bmLU3btD4EdRZuUQfy1xqW95tdk5wS",
  "key18": "27gFYDnyRxcZH7ddEgTReipHpVgV3epUvoAeJmppjbtS5hnEZjDveawgxj2CnttV3xdMjumUfYaVNR6URLu8Bup8",
  "key19": "3duBGdiu2UGR1X67E5qvuh3y8Tv8T4SXsC2nM4Af7iSHi3E8Xn3d3gbMpsb4XbnYZxNFUZtxj69eSv1ufKiFGdJW",
  "key20": "2TSXEbFwChdjgV2qSmNQYDp7thmcotXnhZSWvxnmER6sGrGQVq84tryMKNpHxWwuAf2HSpwZqR7agzNTDPbcreX3",
  "key21": "5gDdLjtS5JoP6aNBPtJuTxHZeswGjJuxkR5qcycubxk3Vz56xGcN5669oRm5bX5Sahh3pPefAk6qZ8XoUkWRfFSz",
  "key22": "5rzmMZ2Yxe6mCHssrFie6gRbzjdjSZXHAVUWXEi2zkY2zYZfuwSyeNCGnZ9T4uD1A7z9k7rRwodLoczHU5gLHcrj",
  "key23": "4974GJDh5cuybEC2A8ZP2QyiqacVhv1Wg7qTkzxjguHLTsS1xXKd7X3gNRJZtaL2PJx8Bkk2RggEaqAE9hitAccS",
  "key24": "4ZLHU7WBhDsZVCuGVBm1hDtfBTtgkxPFtS2V28aBpoGzhXnsToUBNePKmLywKeE4sQBVpbiYhARwrcL4EP2Kbr6s",
  "key25": "3kF6K8xZNVkuwJvrYYn9zNKNpz2z5eRy55x41PDfXpaPrZ3VR2jKdQizgdLfYtH5HpcJDvEmVKhAv1KXNQFVEZnh",
  "key26": "2G8hdruNcZwhrcoHqrWpo1DtSRuEcRXcJNnuA2h1oAniLPGiKf8jjC9KMACV5KjfxVF4mV7HUEqCRA2ptHLsee4V",
  "key27": "3Sjp2TusmnTGiqsXJYoVvVszZXnp6zNmf3j1LFPmz11wKuS2rTvN5nz2iERj6ePK6qmNrrbtZntkx1LRFZRkpnbz",
  "key28": "4NFDJFpY3kWRRLcB3VUAGj8DZPUmp2BExUseEY8yTRCkEaFZc6obgpfnWbe7DPkvr7qWkH74Guk8ArPai1MccaVk",
  "key29": "5oiyfX6KzAqXkSNNXxe4QxABk4QRhfVFYbTqUgWryGS9XVPevnuLF6hb8RYC4aacQakG4VUGKggDnWcS7hKTum9X",
  "key30": "433JpzeYYdLvd8njm7x7LEhWhoZ2PCKATxZZyTCiBjGjAJpCAbroR7iYczaEWLDqtb2TkwAX9V95tUVhB515HxBN",
  "key31": "3ycrhWw1fCbPCsoJr2ARReqh5bMJAhUTjjtJrCtSHBw5tv8rashWai95AotbAghRQWkwY3fh242pTxZatdk8PNvu",
  "key32": "q1zpeWZVLpjZhHDMmQsuhh2nHCymNREGxVtW22TQT6FMg47QjGduPRsWEE7yAM2axrtmPByqTZZJxDFdLEZSUaR",
  "key33": "3KHK65qgsgm3sqKfuJQLJCi1LPbahAuVyXZCYvH41ab4X6xqTfR2hRVBjUGEXm112wmazWmDucXd48fsFrpx1yEQ",
  "key34": "2CvCfuv2gmroqekicBug49VyxtkhhfPYXkX355we6biAcjAmE99gRy3FzLXBNXPnYwBB7gTMmHqE913ytGUaHPZF",
  "key35": "KkMJYj1KfQkByZwoiVf2tS6yf6X4JgwkGDD3RNjDVvoV9GQKc4pnzFrTKe3kz56jXGmZB2u2z5XncmzRMdxquvN",
  "key36": "4BF5c7r45CHjtTpBuJV8P9njriviT3KdV9MkGTUDf1KYdwAaeSzaUwhgBnWiezZTtEqDQMHSxHtbMaXWmZFjixv4",
  "key37": "4aNcVyGoY6tETShz7diD6y2E5hHQcUUb8hG5G1RbfvUsydjGex1HZgCENoYxvj1hzsMYFNpr25ufawfANajToNEM",
  "key38": "5d2YjrxonegZQPJw9L2fJdPiRUNQNA3efgVWGP8cBASXiKK4pRSd6EoAtKR2q1LmJ756k9BRDtztsy5JVyWUwjZE",
  "key39": "3fg4ZraapXxWvGstRFhuvb5KZX5gNzMYqmTesasx2vSKuWes8KP4bpPdeAEoqhG2WY5DyZtqcktFFajqp2GavJwp",
  "key40": "3mUf8ZZAsteVcbMBgkDM2guUsUcZLr6C96PJsLbHhVdtBmp7YStrHBt7L8uuzLoowtUmZWHqxqjazqmi3bKb1pRA"
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
