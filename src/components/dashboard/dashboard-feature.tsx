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
    "2QDiJ7AcJ32vntotNtipJwPuqsLQbKwVEaQ9XnuguDFt1cYXxnSE7JQ1xTjEJVvGigSwosPAFvqcPeesq8w8tu2a"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "24A39GaxnobXhT7qQUFt6KkR8gRFZAJzamNQYTBjnUx716T5wRjhgtdu2gbqzgEyJXsuWJb5Y2LNS5BadwFa7c8E",
  "key1": "PUTJuHNeFxuue5oXyEuxp4AiHRNwSz9LxauqQDDZsyY2TXpqkwRigmCNDybqYbi2igyosxLcNkaTK4PiVwpzU7V",
  "key2": "9JKR9bbUQYKnd3fiZEkqbyvL4sBCgfVPgWUFHL3ak1mVigFdHcexZj9RxyEPp8JYNBvZwaabTGGkptpEKUmmjUJ",
  "key3": "332hFE3mDRzs7SosWpemi4d8BvaDVau2B1sqhxqWFbb2xUGprTXtu7GaqMVCFic8qG3Mzwr9r77M5jFaUPPgJ4Hv",
  "key4": "4MyQzjBP1dFokhZYg6YDvKvJwZaYTfcaUNhYnAFvaVhKWMLAabfYkvATn8EyH8D1a6SoUvLAmgvuBpPZtSvgy5h4",
  "key5": "5gssq9JnXyxNTo8A1piSmnyqiJKJXie5zSfbjhZRBZxB586tuNbPL8Vy325zj2VcaRBDoGTXSZyqDk56F2r736Vi",
  "key6": "5mm5g58bfAoMPaX3AAuDxVU6hH9aUFLyhqY7e4FmZguv5oGr6pmtBDhGRV9kKpmeowxVc2iUkBXJRRvyq8pDR4uY",
  "key7": "4WzQpnPYp9rST9vdcCMhBHp8bQsoCEqgZGf2kp6xewVeMoeeqtUVtG28H3jqb1C9BxsiryTu2QD5RwDW9MgjxNPo",
  "key8": "5XHHLWyynRT56cyAsJXijqgJntimcFfLi66yfnbX9S5rjs1X33ACULWiMJLVeZP3gbWD1RHz4jGw9qFJ4mGi7F3c",
  "key9": "2CAxcqjjmuBsY3hNQp8X1cjkATaetR7dbQzznU7sFvF6o1GyRNPNSMgqqLexTz4cmc69wPCBhzFVPS39VWu4JtRM",
  "key10": "3C7Rw4nuwko6MExej9yME4Eit8go1jAadjiV5scu1z41JZAF1C3HSkHoPLMkbTv3pSxz5gVCGeatwPPYVEjRQqw7",
  "key11": "5R532E9bPb7AmgxE8wAk4LTFAdjSk1swg8MautzviHjJzP5GK8BSBwKSFc24v23vhp3u2Z4tkz8GC4HHQSzrAW8D",
  "key12": "4LSMVmCYxPB1bm3x8MmnSNNPGxHx4g249FyXU1EWfqNjxjD1BQtqG8vecw1nsAQbPhaYuEsrGzD3zPD77PaMrQuN",
  "key13": "4bPZQsRyPrx9RWdnvZxJ3sYz2TpjsEFHChkvARYpk7Ph5L66tMbzJskBrMbx9DunvXxGxMHtxc6G7n9yimEnmfxa",
  "key14": "67qssQfgxinpkwrLWDmQWVnm44ww7fXyFqUoXGWKLJLNQrNgYKans7GUUktRTaKLqgiEcTGyhd6nShfF2nbMqB2T",
  "key15": "5tksyC1ixFAkzZr2R9bmRVm4oN6RFMUjSczgaLwxEQwKTub5TghsCfDZ23W1VUHhCLnuEsePbdz2Us2a3rpr9Qmh",
  "key16": "4nD4rxJbsufpEfKeRdbgojm1hawo3iKALorxxkn5QJyCZwQUVa3GLgCQd9FtrDEoChbUXD9nm7TrNYqNsenw3iY",
  "key17": "3snXtabAUkY2YqPPbb5cyqbLncfsaVaXHegxbKdHSV7EHtqoEcpMVZDrgK7aUJEXq9K6df7WnKZ651uEDtv7bQuf",
  "key18": "5gF3yz2vQM7bKGqEQuC6WtQkg4YWK473rm6QRpzZ9kVdpxx1rdfDGTwPGRyMo9fX385Mb1VQXLDtDERvuEqNi5XP",
  "key19": "3QtPpzjocKARqEyWv6VzRjGMC3WTxz86ByAn3htzrkyGb7uPwJUv6ifG3NSiycyYho6cUFY8gY4vEYxpkbySC1ei",
  "key20": "pDoMfUZ7tcu47upngrtNqpQQUnhbkoLU1vEGeZHrHE9JCALVpBWkzVFNVtTJdCnuU9WQNCG9na6RgQmisKCfGbU",
  "key21": "3uWmow93Ra8cZA2GwLmgFNSLVcZYCzse59tLvycNZhaZm6BY8x4tC7jhR2nNNmGyKNJjJc8rD5N7gP31xE5xfCJX",
  "key22": "5rxNw5Qd7t9pzi83R9SyuDsUCCcRXxVYpUMpaDhtTpycHmKtPZTPLmdbP5krT852funR2JAaoRH7bBcbJ5AAEBvd",
  "key23": "2aPuPaYWtgwEHaHR1kksopT7oYopvZmAViYQ4G4VADoPimW29jjvVwdCTmgQvH5Gm3XwTqZ8MYDsko1znZY9HyQb",
  "key24": "3pais8QetGvESPMR7Eskgy1kuG4Qwr2nNEQFjXa7G284edHsGezexmgttRE2KdyLZWGYwiQ6Pak9vHZbUUG91Hj6",
  "key25": "3RcHgxaLWqo1dBynmoYVz57ofTxT3wm4sMxrr5GnbBxJWF9ePcGswPcJNMpo6iv5Vaxcwg1LBw4wSaoYZxGhUQTe",
  "key26": "XDq7nTqFPJohN4HZhbFrjk7S14SLTEd5s7ikfTT2kPwoRNZpgipmDrEM7tukHfjp1LPk4Gwe4nheRCqdvd9pf7W",
  "key27": "dapRcNG7DtyRDxU9QxNTpoujfn3JJQCv9EoCzxVMzJNLCWbfuh2nLJH5YwWHfN9GdjwN4PXnbEhxDuXGy9yts8Q",
  "key28": "3Vy3aBc52pSaFFNCtZwZr7kKctxsGgeGJT9JU2bijuV9CpRXAxdDzbwJ7z6JewhhTzHVmZtnwwEAKdSKP3w7wo5Q",
  "key29": "65bBn2yjgUzfNRnodRAXw1Huoph3GkLckhGPMbdV1XSGLgRs23GCtQV4wMuPvqYP9MPVcH1XeZmSRjtojJKM5WcP",
  "key30": "4aDLrMoBPTqJvCvbKQPW2tHkiYEtg4EmtnVdLr56fhZFttnL9ntCMAGfdpc6K4mfaDoDD3c5AMh6WTCf9AnH4euN",
  "key31": "4wYPPNpDFrkTPhE7LGiEHdj4x7QaAjZUJqa9NX2ua1hBJonn8UepxAMh1GAhU7kyAfERcsK4czm3FZicKbNRFPms",
  "key32": "3qQbpWzULGh8u5bafprAipc9BVpYxjKywnw3L4PdmCxgMQtehuCovaSGResLiwjsXEBGb9Nj4mXhWteH7YGTbqm1",
  "key33": "3RDRxSHZ6JSgxA9Fuxi2vRFHxYXSe5k5bcQXctRUKymc87Bft2pDEL6zToryxdDDXAdpAExbAW15mWH8eheFjtjt",
  "key34": "2NBjL9sQhpVA6AYHi5T3v7PnoZFX5vJBLAXWPNzYaYaWVmHeGFLosrf5bVrumewEhBwBjSvC5Mx7YsiTFBX6TyNp",
  "key35": "4vkmbmze6BC4TX3vMHjr6K3cJ1zVCb3kGEkdW2tjyHd41EdQaALxPe4rSpC5NVpjUw9WiGswbBdWniZKZ25HqRS2",
  "key36": "5pvUvyeDbgWa1A2cXHnh9Jbbno57r5DgDnohSBGZkknzM1mciFNiLGZ3Hzur3M27NVdyyHYqo3DtcqeDvGFk69qS",
  "key37": "3f9F6KFEe9vbEtCqvuQeobpuvozbug4E13PUiWRS86KNwUH1Bf8w8wUUoHxQDihyyFHAxVbEDa55iMDxSfM2Jsar",
  "key38": "5XJRhEU8fa9YZDAAGbxC876LNwE7fscY5AHSD7hwAEV1AKW4tnrNRXkS2EhHxJJ5u4yeykvwwzNh7KDhBaLFWHVc",
  "key39": "2UxGos3yv4eNj6TyzQ6mZgvJvpMs2wtbinorJTTMisUte8DmH8v67Zj3jnZ3MHosWBMyc4aWZ2Np5BHc9mckHjaU",
  "key40": "mVGBUgaamFrh78T2ms4Ls8ezynn9JypLBSvfDVrDtCgSkwn1kw5RCi5hdYbDX2QGVq6uD7Z1z4FCWufEcGmhWuX",
  "key41": "293ycXSjokreCjVx2XL1eLDctGNkK5uCQEmzwc1u8FA6SiPki2ehK6NXwpuNRouSjcmpEryyfC88AawG1vLbfPcH",
  "key42": "1wgNzWFvcakVDWNVGUHZGgksCvfVoWyxcneSyCmFHVQxehKSvfM26KusPJoHap2tTzV9o43NtC7HyCnqbH23rY3",
  "key43": "4MBWx4oSJatCHVHaTKY86YfoSgG2UHLPt484Xodu5Z7hAAkLUUrxH77RhUiVkvi59XiN33FQkMVeh3DvfT2zwjzC",
  "key44": "4DSJ3G5HxorAS45VvLdzj68HSmCHqZb3hdYyzT2xTCDTZvAMGGWL9X5QzhL3RddCvdPWhrqytk4qMmQ457gATryb",
  "key45": "3c5iarFwjPB1bnNHghgfJHPEbM8rKAL611QfPkmL3a78rLGsQzoYQ1B312bQLWgqvWiog1JnNghectJF25Mf8VR1",
  "key46": "2ASYGpMfq6UzbyKLeZLAQSG8Zsw4TVvmD723QubgEgBppRNzHGsSU96oYAarkkJDYLubZmXgk92eX49M8x3eBEkk",
  "key47": "2kpPQPP6fz15HJGpy3EEkueZoTLcitSzSed4U4rdK3TwiM16zkeQ3AuHK1mUyVfSZiUZY6y9Qmuehd9NGr6yBEje",
  "key48": "4uC7Ta3m2jdQN2JCvUcYDQMLi7KghCRHk8XXaEYcgDCPsR2FCZyPjx2vcX8NHPEUMB8R4YJPH92LKB4AYugq2JSk",
  "key49": "c8F73wf8w4218jWFdj8HAZmWqF2wxCxJY61SF7xycXb9k4hsfH5pALwBUXMxHAHFMsnes2449w3Jj8vr2dxk4RC"
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
