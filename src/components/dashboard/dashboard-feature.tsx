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
    "52qAGx7QC9mhh3XHzvKMMQmesRArG2E68yVnWSAZkdQtgFuZDihhyQNXRvMURE6n8MCYp1zSxEb64wwogVRJMxsv"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "FnV9U5XWLfbr47R3KoHHXDZ5gQH9x8MJwLoP3HVmcANiyJDDsamsgagvWfyeH2TcFe5v2cnFpjiJiQRqngPoCnb",
  "key1": "2YVaSehMkk8eG1R4fyPf3dKeZVPrXfm3fSdrUweAPCqNRQL3pMS9P8grgXDavfsouKinfwkhFuWG1KJnEE1zbSBJ",
  "key2": "nSJ1A9KSHC9Saw3kmvA6hJUMuK9SzmkdURV33hqVZQAWqf4bxJwJ9cg5fJ6Du7o4Wk6n4zcga8zZrYMjZwzim8c",
  "key3": "34NcbSpg2ezz9WsEubQ1XejYyMSRTRdxRbvrNUFrrvPv5SvunJmskRoArCcPgE6hdYcmS4nu7aF9wvS2SCM6akeM",
  "key4": "3Tas3CLF7h9wKt7cNNSJPDnKDHUbvgh8rVDmxS1psUSpU2Zrz3A8HobBi9edsNyN6bhMrMQFVcKGYkujipz2NKef",
  "key5": "5uPQhNknYD3XHopW9rLDRqchAXS1dEK51HrJtQo9VnsQ6eZGPz4eRavpKF8jgpX9VPRPdkzbXtC3WgSzqYNJogr8",
  "key6": "4bmh6SN6L3FS4EMEeeqRLekQL1fJTPBjicpHMusdPEPQvgXjk2kyqBtyCaD2BZyNXmE9jCkiVKxzJs6Eut7drMUa",
  "key7": "2Kj6FzuJ4mRsLfWgx6zNefZfdytpqGpDPNcrxHzWUmDGkNimLayaD7em4DhBK8nUcSMqcK31vkkAxLdvo4SjFQJN",
  "key8": "4A6aLhonskeMahU73PLPqxepGEYipv2DM8dNqoQAyJG3xPJ2dNs3TEdfBymMvEeiuXhezksFGzDLBAgixirGsfJa",
  "key9": "w31tTjCnUM3cAjmRDmCF92YukDPuKcVfWDUfpVJ9QECKWv8FEWsuSD9n71FbchoZg2JajdMZKnRJdCythnV5G4g",
  "key10": "3QsJHbkfG2ApjAdjnsAYYzh6HJkDtp5hxW1t4PSpcfXxuMp92A9gtQzBhy3su4XDMquyzB1ncnrhgEQztvXfCrmn",
  "key11": "jR7Whr9Z56A2LUUrVpoePJwPhN8YqA7szrPh6H3MUnW7LhsbksH5eDFw2nPjBS8qJGEvbj7T4UGENys2xTUBGq2",
  "key12": "3EH7bEyE826YAMoUCfK72yLZcfpbDYmHEYMyzbQyurXydGqY1FYhXk4AFpnGpXTA5re7N6kD9FDQiynSqCaSbH8W",
  "key13": "3jdDN4r1F46H28Dw7uMqZ8L8dvq9nd7UcHkXYnJB53p6NN7nTV1Ec52f3dGbgdJRdHPSKzuJ7ShnZS1ghSzn5fXH",
  "key14": "46jhcMSrwHg3vugPyM3JHwrUtKTrBRgQzghwD7d7bZUtNBHMf16DotydHKQBttiQc6dhiAcX8vwzt8zK7Gk64Pkx",
  "key15": "3sMK1RTivN9jCwvKC2xVPiKvoitJk4QNZnG5d8RZ7TN1gUveZYfpyvt8x67xfxRCaSyBM9WwSHZqedZhwdX588gd",
  "key16": "Czni71wHY6smVwA6LFn59mcA6VKTeiEKRqJccmh41tCqTdgHUebPQUuEM7N2qrEEWApKpSeFVbjx33oix5t4EB8",
  "key17": "5v4AnDWUGjG8VP3rEYwi4b9xVyhiLFmvm1TGhoAiSFAH5rwL8BytXrhogFN71xK3tocLgWX8m8dc1wA4EpyRYdwM",
  "key18": "3R6mbCfVDAVsJvN86i17tvMtDSxMMg9PrZs1tyjhjXR4tztqgwjjD4WZSikiT8baE6yLmLRGmUG4dMjuKBt3vFEi",
  "key19": "4uGSgNRJwLRFPTf293SMXBXvg4A2KZbKuMkydSfAriuC3W6km4rajgYia7V5QCWWEJ3tqwgvJe1emL3djys4fKd5",
  "key20": "rSiuFi4PPBqz67Gk4pKKgtvU2HLut1NnDBeYVMvUv8iNfacR3N637nZ6kaqrq596KzBdbZyZij6RtL4n8NAK3Vj",
  "key21": "5VtUYAxSqwMhGkP63GoydVNvuqo8iaZ1KbWFRqTSQSLe5qBa7bKn7NyudccfwkQVXrKjUw2UZ5UChAeiUEDojWtH",
  "key22": "Ywk7ZJzUnADxgrYtCap8wLDLxxDgbNMtsDD6PPkksUiPLGbNHaRsBeKkvkGsGMSMuobPq2oKDseyq6fFTreut79",
  "key23": "K2sNFwDEHgQYca1Ft71YsuToMZoLDHPcpijb1dqnBFc6Lm989hFQPXjhLQ6HqxHavZWYc7aC3VHVVB3LKtBDu9o",
  "key24": "2hfcaxzRYPZ4W2g9oie4nooaLwt2S5HAA12r59hBo1sBbpxVZohQjL84mmjPPUCdFpQHFjnH6jGUogjZeAN7dYvp",
  "key25": "5UUS6VMWh7Uu6esWPEHUS2iJvnYq9ri39sstM6XdPo4sZjzK9t2JwHcS3bK2zsmbAbujrQzB8hbNVArQoA9Hws38",
  "key26": "7R9beHV5jKYn5x1rofiVX4jq5DdsbWGarWtYoNRKv8gyoztAbBvCYj5Krst4wESp8QupD1EKnwY1itVMcZwQfEr",
  "key27": "Fm5Rh51U2Mgx6MVgWDNxS5CDWyzX9xVBpiWWyVkWwcC7NtoNmPbTAgxEf7HvZPQg1zF13jF2fECgsqnLnPVPWkt",
  "key28": "5L8W9nKoJmBeALUuYBanZPbBJNFxaF9caLGEWk4D1512qLKQcSnCYkFiLNTeHy28XP5qFzZ5tc2J3SFGYPSiw86X",
  "key29": "4g2NVgMSuFR1xrMzXEkbEPis5e7J3TohxE7niS87ZaG3beeUP7gkNWhDfmHMuqEwHrYffHWJtZfZqTqrUNssyxtb",
  "key30": "Vshx81Wvo8ikm5tFtAfxtttgXFwRBDXf5Tv9xnXeSTGNqTEf9ihMzX6tsygoPrdB52r9sBSCk2wh7AnSAWeC7VV",
  "key31": "2GjUghxx16MUbzdDoPwCa7jJnrv4VHG2kaAMZCusFRVqP74BGbdh6qgRLgUzUNKz7hoRm8yjrcFwZ9LKktQ6yNMp",
  "key32": "64YJepKwGK3HZx8Rc51jT2xGDDxg7iZnDsugXq3JK8SABbLMC4mM6Xhrj96LoHhjaHHinDhtDtxXEYbCnMJBo95Z",
  "key33": "124HBdsQmcxHLeUPwAntNzG5ceUXW3LaGgzFbDVfyRP5VQB66g4Bki1hMYbxUWqZMrzQrjpPz7FJW7C3opTDSUep",
  "key34": "TrvYQNhU988Tx38ictoFnPNDQvwXhzezbouuii9auMzqnD4PEQc3Sj4c3tvvokRSDQ1wzJJVvCU4AHNASU9yCha",
  "key35": "o9vm4YyqR44eBWh91K8NYDtvfhFWaMAWCsXGd1DFw1EP6Kwxetm1mzYDYyA4o3x8vZidd5SSgGdVA7Gz5h8BJva",
  "key36": "vDJ28jKePX2Lbbck5nknLuNheFuiGzoeokwhGP5y6VSiGXDXw27ttUJWfX3BTkZHe6pdnTtESUff6yHTQEoCYVR",
  "key37": "5jpPfzx9719L26dzn2btJSghC2oFTVCqeg7J1oFiyzkhxzHNiTsLy3q14UPxKissNHSp1yFFtxDz4BayuxgELGTg",
  "key38": "RfzrJu2xmWSDcpcaSogKbf5Z3fsMjpqq8N6TmCQM6XVao23idPwj98E3zg7p6GAqRL4EDuYgjZNdAuMQGtWaXue"
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
