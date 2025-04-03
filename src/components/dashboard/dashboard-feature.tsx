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
    "4ZiEGT26XYFtRqCGkYirxdssPKiYnt1vvR3zeCR1YBezriCa8mw2Y2DL1DdSKBV46X3ZDzFuRyUVobEdkqtAccG5"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5r6EJKXFbPLRFtvTh3sAyCsSj38sqDAyqCvA8f7FFRpAyv2hGi2wjKUnSPsVryBQvNg8GMhVp4skmwvoBzg3dSZ6",
  "key1": "2esgHGyrBJZRjYVPVenHYJ9vq1EBrS9p5zetykLjtik5muPZ8V15nzbevB2T26LHXSQ3UfsJbk9SWbm7ob7wwhd7",
  "key2": "2XncGDkQZSHn5VgpvWyhigvcbe4HuWvZYZrJCoFEhUiQN8ow7d3WDRRaA1JFUmc9oprGxmV1TvwZUq3KLui96jhv",
  "key3": "2yZ6X5QW6YWxLqcmaCQRYhiw3Exhf7YxdDa511C1zCAL5puuu7wtxvbp73J5FDy1Bs5sWWYC1MfddVJKP3PeuzTt",
  "key4": "4CmwxbmhpXWMqYKXEcYRnMf6zrXue9skDSwMnd9a3gJdrUWHSyzBfh89ossKgJp74zkN2q5ofrK539x5xeVoQWh5",
  "key5": "4uNTow6p9VYE33h6rEeZQv1YFXoyFrxhky4ALXUpB3W1fyZMPbahph7YSLXMEFsvtyMbMSbLfcinFaMVpn6Skmeh",
  "key6": "4KLt4ncZjoyQVyD3p4RGL4pFZj66noL5FE7ZYxYKdh6ESi58gvkvgDNdH6j8BEGwrSSgVziM46eDTJoJo4E2uJf7",
  "key7": "3q8TZkWVnj659koQDBHJEECirjf6wYyn3UdPR8ed8xptRET2cJZa54HgARDKeSEsNqNXBnLzXYWovpebyYoAQzSc",
  "key8": "2mienVjx9aEZHcFGSbS6rjewrmBuye9DeiXwRogveTB1w9o1Uc82bLpZyjBcWTXxHVaTbeKbhfKshwW5E6snqiGT",
  "key9": "39QnNRdXZMoKEiFPpi2WaEbHhUEftnBoovekNexPcsiVhUhdx8D6UK6DFTETv1eSnZWxtLAFzTDgxqjQyJZt4ys2",
  "key10": "4SDjrkmEmZES9VB7EzEFUdhnVpML5pmU6cJdZZGPv5HJ4mF1wNogoqwP6T4B6HgEEhVzjw1rvGFCvrU7mpEohdsy",
  "key11": "5tZ8Aue1G8TZdHzxWVZZSxPTqdeyDR4yJKh7aN5N9qGthY1BJtCYxPMtMG5rBsfxS4rDPsXa9aM79jRxfcPqTTS4",
  "key12": "2J9xqZj9ZbxtrczPPfwS8oghEFN5R5KuJtPicWXmVnQJ1d5PP9VNm6x2cLyi65pcZMsYadF56ho1Pvw145ecJBBn",
  "key13": "GqixnDt112fyGxSVk7pQd9uQjE9BNaGSXb5KfNB7UreaA43mpmdbrMXD1sPSN1C9JzCzPe3azDQLauyHzW89ynS",
  "key14": "577dBwfQzfryiyjbc163hmnz2BJcTDsiziSFf4S4UtkCXddc7cAW4uZHRLJhgmbwTKCffGVAgiGQyDpZwDE19xqD",
  "key15": "2GjopGN5PkupW4owmRcxFESM6pWr1EABB1gA2ATvTLH8cQkpHp6NnUFDcocdqhZYJmRJJaGg8aqVh9PB9KVWdVrE",
  "key16": "Do5NEiLtqqtoFJ996jkptGu5Gc8FTMt3Vdywpqm19b7fEJi38zBjU69N13riWqvbRxGHdfVz4zhQE6VtSXwvfES",
  "key17": "4etfwG8YynmRVANDTBovaf3BEAftVahCyZ9BgMZnq88g2g3s89qQ4CAGXEi8c7rApZye25yhLXA3DxSbV5wfG8Cg",
  "key18": "4zrSB46oZJgCbuKCbrXxzQAfudtRKuGiFG5FJgQffHRjGRBvHk2vydWKew8jz2fgGvCz2TtqPfwQoHjxN4Rc36wa",
  "key19": "2i1PhqgpS1PK4impigbvPgi1658XQpPoVMXdCtTUDJumgTJgTaphhPCEAYhLwfxZqgrTvWgRJsjNbkAtRTW1C59y",
  "key20": "4E1u8eQCNm7oYzmBw2Jk6rrB3wMEF6SvkxR1xGRtU9PgqKYShoFn5HcxH2ekp1jC3yCB472aM9rBAVAmWn7wZdsA",
  "key21": "3djPVW5RtybjQAyg4TaCsM7V5EDzEPJPMw7vQsS36Qy2peHiKTJvdtCPUNfYKvp9dfx3mz1xXo2Ly1Ggyt3K4DoZ",
  "key22": "3NVocUb54s7yTthV3XDcmZDtuN9jTLVAk7GTazyCW7YB1ayhoF91mgEsadeSfNFBsRvTKW6ePuG9sUCsz3eWMYJV",
  "key23": "n8p7vCN6B4wvkW9Ar61SKK9bDoNn5AZmtcsSEe4osLaqdomyok469UmLdXNcoHQ8SU4fdesyCd3RnQfTVhtLv1T",
  "key24": "3TdE2Ms1H5bn4mkxXBkQsMZVsWr3aALxzzU1jwXBsEGsiAGUFNHhZ2kn9PJUgkNpohWaE7fAn45A7FAC4pvZntXf",
  "key25": "4VCxJy4szHJ4pGEgFjMiTv8yB5awqyqE6h9S9RUwccsLWDYxwJBuFKAY38RjgxA5W1yrhptP6KVfzu8Qcgib7KAf",
  "key26": "3m8sPyjAES6HfxWt8YqtmC2HW4uxoYczs3E4jskGZ6BJcPfBA5PALS9t9WYGZNarxmYv3LS9YiXiBtE7Y8D2tpCG",
  "key27": "4bTJbpHbrWKoS1DSP1aPWcrprJ65w321LaNUFUFEixWkAVL16oViYjv14wfpeaAUMa5FnyTdh8wUCy6we4KrFPYM",
  "key28": "4NCx3KjgY5T45kcgfRjvkYX5ZJGRzX5jw5zsEyZuu3hdLY76SAYxyBdoucYB8Yx5rDw5GUQjGdrpHji6aR2VCWq2",
  "key29": "2JFgBkGLRn1x2ZyEA4qzt5cF143PAeeL9RpYbegpU3cMhfdT2GgkZFWHVvu8cNAEteCiWnrh8udLENX2vCqExKR6",
  "key30": "9BRUBHhpjApBDeuhpZHLF1xE1Qk1x3y9aJMG7mkgSLX6spe6Js54QPfcYby5Z4WMndGQaLvs5XwK6Tnxd5uDkkR",
  "key31": "4HTaZpiSgrqf6QoKqY9bm2Sh9tVqzMmdUWE9zTT3qoDk6uyuoH56qYHNMkxmKNYrQ2gk3rG4BwJPfBs6DQ9HKbHm",
  "key32": "2Fv3XJjUGPdyExUpK1KGDfeFbMxwX9qv2NjAMERL3uKaxH79J2ZcxmT3c6gSeiC6ELKe2s5QwrAYE28XWtSZNzMg",
  "key33": "5zTjcsTHySWWJ89ph4Kp1h9MoLzcf2recjhQFq8ycjCdMCf6WNXhQ5DdLXtJauqUxoo5DnaztkKVN3cSf6cZBQ1j",
  "key34": "EBfHp1Svb3sRmqcxbQMtgtW7BZaeGCHBTtHpeYMapADZZxbdKXMyqTz2rv6J1WFvnPwW7yFx3NyiPgABPA5uEDZ",
  "key35": "4HtvFk7chhRSnf5biGJCxFmnNQHR2PLqxYcuhGYMNeP7DTUDwuhTaQvg29eF4b51rndk2vn85gjEDPDE662EJrw2",
  "key36": "35MmrenYBCN4HytQjpbLhnEM7MtEEGMbr4AtEY5F772iBmU8rubdo5ddCYwivUZcordwUAPm2xxj2omUt38GyQoV",
  "key37": "5Qxe5bR9zAyTrcGSZYv1ACSUzTKDq7FSC5DRJ4gh5jBaDgNXnez3JWL8qyNDdVc6i14nAyPMPkQuZVFDT7qfHuzM",
  "key38": "akYgx5696yvWBYfXGqRhj5qSQkvz2hzAGR2diD7dszyy39Tseer1petXdko1a4tSN1o5Z2UcvN8cVEc59pSntjM"
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
