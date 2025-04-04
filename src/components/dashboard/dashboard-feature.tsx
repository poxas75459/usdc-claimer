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
    "5kUyb82EGPCwogTKFJpcyNSkqyPePi6LjWB9VpM4PR9dbWvKJPWZH1ZKEvkPgSsWAfR5fiGLy6JndM29f3UsHjLt"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4tJgvtBwRjGhB28dRPr6R7oQcxxRYnQoyKJXj21HNhPRTTQzwZNR1kqdkpLKtDQD9sSyrN5sbUVmdBpAWewXS3dm",
  "key1": "2XbM8xWqk3zTGAYqPKGwijw64pZKQ64KvnWTtPFWGh3W4skxS1ZReKiZmuKzp89rTCwpQwBH7tDCfehowGNWhFr6",
  "key2": "AiYjWPDsHGADYXjfCsh81kMedNDbKFesRFGaCjGxDBnGPyAXD6TBAioAtX3tnAsLMdzfkSc5SinGjNPqqeGeAKY",
  "key3": "53xJwZCZwvREFfWDiFggrsde2tDE8VYVSMf3ufPLNcEsxLmJiefMKwzsBwJZVcx8kGU2VNHpn7ULzZNP3jphKyNK",
  "key4": "2LcwVjzP9xA8E1cWdpUiDxKEydf2JZzzGvT6EWYUq2MmvafYAh8wp1shyYE3Zdf5eP24a6juupM8JpokWRtzKB2j",
  "key5": "4VvSEATyrxZR86vdwmro1M9C4Sqyxvgw4JkK6Q9D3RKbEQxhHzaC56cbqjDXcbMPMB2iGUGe9XsfvYmJkUfaf3oJ",
  "key6": "5CcCMGxyDC6UnbDpjmVozUmk3hCexDdXeSkcT4kYs3X8pU2v2nfUsKm6YgR3yefvkCJdjrhWrRWf6hooBTKGWLCC",
  "key7": "3oYUnFEtxdoWyGnhxnAQLa4NaAzFfnyusKVhDcaNZQGbNf479CrHgg2ERKCfPsCYfDAXAPrA298EBRCHHidyHZAZ",
  "key8": "48WKkQJjhAarphfJUff1AnEmZBnL6nJVvWbATdZz5LTFjGG1kbJs2sHnNXyf5GX8v3doVcMLjn4Jc7oEdhzC3ojh",
  "key9": "4s7LkdLVcWGKq1cSghkoRXmsGdc8pmw3g9dTTQgUN9yvjWPgmoPXaY9VhhhAfpUFzRVgc2oSgwKKEewByrCjuz1W",
  "key10": "4nSCESEPuGjviG7f9JAHoCMx3zJmV8Bn9u87ZCUZJ1CR1Rohb3YXwyASM4akhgUmi5uhqKx37y8SNnWGXuHXnRkK",
  "key11": "ibcChVzBnAVYpr2xWxRGHjGbSa7xe59uMdQFz7d69nMPePju9u6KbGgQF7ZZDXkBbscHYjgRDZQxqS1B3KW2SFP",
  "key12": "4pSehTYUDYCoZYTYpMqQmhfqYgHR5kg2xQvr7k2gipkR8KhHciNb4kc3kYo7cedn3JeV5eN3maTufXBRtxZL8d4V",
  "key13": "4Ewt6rL7hb7cRvU8vTp7iFWB2f129DUnr7a1D4NY1mSXsmuLcsvZgVRkDUMsbkN37fdy8nxbXCw16mSz1WwjkyvV",
  "key14": "28ASH3oZAVkgXLoV1SZJss7fEFLmCNLiXKm3P31zFpVJetThDHyCSy2EpUmy4nyiRCTELCB9gzkc1t6KBbrPNB1N",
  "key15": "2wKfCxw6MdWo7i9vwED7R4Wy46pMvVwcy7mVh7ygnjXNBeKervRsRWUXt4F4DNtRma3FheoXgejnEaNriHPgMxNB",
  "key16": "5VqyYHDjkYZyCSQW2DSf8wo6tmFouVZBpUEDPqMkuUaD3DE2RzaiDuY1BekYQBdK1G1fApsmjmsLmqNdNYt8DDnL",
  "key17": "3X6XtJkhNUhnKs8DtXmNo62gWkmdNGEx1RC96hiGe2EcTLasXzCfhWNBBFmpKH7dW7ULU2TxpVFJdpKewxGWMauE",
  "key18": "3Zp2SNGu75Styp91oLLSoURajLYoUpGD6HFTQormrDNoNnXNwPYNma3jaBJvt8QGZdYYNxbRnaeimL96cVriy6r2",
  "key19": "4JRXpnkrRbtoQS4xZBZHNvy6iqVXH2LhNqhy5599BgdocXdzKeLL2ozZ7ypWG7smAxAKMCyb3NGxaTAYADyJaYbP",
  "key20": "3YcKTF6Uk9YHhCuym1QqXtf5F8Kvut594wcZfymDuxEo3rT46atQVpPpJhLKhfXN5DT76RAXcXNzMywk5aAv7q9a",
  "key21": "njso6FV7WL6Uy1mr9L6DfHzZgGfDa3SEVYozCuQXTXqfEujbi1K29yvLQ8CRqrsL4ctNJwPJa7nfqkWirmuyFW1",
  "key22": "3B6JuHuoPTr8QoyNW6DAJtS89Li6tsRDv5sZzhoAmexabgk4P28NCcUzhMrXbB1A2S3u9wkPg3Mb7ynZ3pKJoqtc",
  "key23": "LCpGmbx8EwBQ81UFNzvy7nP7nVasbnxRLdV2GUG6fVoaggbU6TVYdGE572wppP36evuurrGZRrZhsxM5y5FAzL3",
  "key24": "2DTfTcfysBKhs2udsehhUNHt7FgNT5Lt8TbJhaGHctr51YQEQDKHyCNN2MRAUk6xamUqqKqT8thPtubjPixaFFJo",
  "key25": "4k6VCRBUbKAxi5QP7h6XMGH57DyC8W7ujSBYunAoenVyZqT9eYU2SiVdd3FmnkRqKqB4VvbB5BRDEJyXLrEWjDrk",
  "key26": "5kuaYbLeqxPhsnM6krZ6LnQ3RnLJoSAuAvB4N6XDnzQscXTNUJ4cRSN9vmPTL5BPQUUiv9LYM9s1aw8PTnXTwtDh",
  "key27": "3jP3LeXYFuD7SWTJ6xs8cAHDLgkZq8HMn292gEz4nrQePRZCJzMa84cSoqaYfaCn8zXfA7kUEaAeVApjgFcnsKnz",
  "key28": "3hrHbQHXci8tfpfbLZezcBYBNAVhkdVAuZ2xJJQgAWzohufeyK6y3Ac3fspfpjAj2vF4fBYV9wnXNMttxoasCTp9",
  "key29": "5gwG2qwCBcfAHHn7U9Y7B8327doJCkQuomSuXPitUgEVeWjuww6vQheCfADw5UoSLjBDfxm2d7fh94qcATHKKunN",
  "key30": "evmYHsQpASYo7x5bJUjxLpQpBaM4XcKYeQ3T5G7DtQXujquenEq9wzSqNVmPainfr18aw2RX9DX8x36sN8otEps",
  "key31": "3SXZoXh1iQpdXYEmHfgo23jncJXNedtGhTg3uyuh1MfveMW3uL2SAFkoTazY5x2Y8zM7Kou3hCiFbkSNRTDNhPqt",
  "key32": "2y5jEp1nFhEs9fbFV4dxZUXuSwwM4gMYk2izTyQYseJoaZHhvPZG6QkdD8dSBzVLuM4yk6gJSpbefj9rnLLTQey1",
  "key33": "a7ysy1Y41AHiLvp8tYGgAcjrRCbEsZzT5tnoFPtKGXUUSo7ohGoGuohyB4W4jRk4Sp5wTqMVDxmbZVaUtXFU4BT",
  "key34": "5Qk8uFK6KFgYChp1uRQPZtFAbieMPEijVXKqoL2QByMYf3FYEoXCcoKoxjAjWwccZ7USTTPTkoTBR9M7aTiemUYq",
  "key35": "pBw7n4MofsniYNZjSSC791aUaAjM6Sn5erQ6NLj9DmT4Z2YbYuhYm1e95XXwnAeQJKRsspPhYSkmQGojrzQDnyL",
  "key36": "5GQCH6XUZLDiLiv2Rffz1pqAQ3HSZWxwzkQeWquCjc5dgR9As12HDAdNCGrUJDpBTTAaA886J5EeoZx7KMvVbrmx",
  "key37": "4KewqDCywcFRb9N7MSJ9DZiYvhLVjxhS3YaKKNAhGZNAZMLEVc1vyDitrtvpMcFhgS27w7LSTKB2VHEYfdMB113w",
  "key38": "36ebvL1BafYHSFJXViRmYqb9BQmj84KdxMwSuhNdfL2SjXDjgkztDt8zamM1Ce4aBXpfg71mRHKuu6Q6ihX4LGeZ",
  "key39": "4V4gTQ5nXFaWYWt3KPotP1KjJ6TWmoSUd9DEpyuYhqwgvYR3YMonXw42Wp1pR5nyz7GbdFP9YR9o6nHxjHAUsFDy",
  "key40": "3vM6DmtgPs4UP78dQixvGUxUxUzbptcKsG5NEqS5QdaYtmSTgDpRRDdk38vYccYupURvnoXTRYjFyQpHuV6uj38i",
  "key41": "4ttrbDtVyAXZWqxNvSe28Avnnr6gWraNM2pPcGq3vYkaPZzLL7C5duU5XU7nfhsens8UqJEU62s5tNpThEe6Py4H",
  "key42": "2pRcZnXZSiUgGurBJZhJ7TsuiLy2pvqJjJekUXzUZSEuzzreT3zvMT5oadZjAkCxkubHH6GDhiSbJEHn1eyUAdwb",
  "key43": "1Txo7RL4jA2MSEwwzf4RudfM7NAnabVk7QaysCqr4Fjq5bY4z31DbS9m3kHCKVMYnz59K8E6ZSGEXG9ynpFejfB",
  "key44": "2YiEm8bLpRnSfwfQyRUgaqmtziSoFxBgCUMQSSDV9vL6SyJz9xJyW1fGvwD4biBCBogvhXxpMCvhXtVpyiTZi3zo",
  "key45": "YDKd3jtFHxzmvC1obvHg8HPpyX8DyjhFMf7CRsUkaHiqzHHbZ5Y6BHGkoppfm7J7mHb9z2VnNBJsL3ymbx4y1nD",
  "key46": "4t5z37FVR5jVYzidfk7q32bn2JHyEGz8TzYXube6AMyLu1tQeLVSLAWLniXPX6cpPLVVV4QHFACygfVvxaPhqqxX"
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
