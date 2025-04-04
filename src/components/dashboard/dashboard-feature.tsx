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
    "44qh7uQwLvKnKAaeZnrUrPKbtWBCCUvjwVx35dnWTwCgkE2n4SPTQV4u1ruZum9LvjgW2ar5UcfMtJL7QNxEC8N3"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4iRNBTheEjhCH5Ms1bhfeVgrTmNDYpgtx5bY9KGXuvzCNM6MySXjJCDNpw6ymvxAEzzMDuCC2iJAnRkyr3P7DUFV",
  "key1": "2x24gehFVmGdKesi4XhpoLMyDynLGwgxAc42sDheTFypwci7PAziA379UMhjc2jK4ZPc6cudpvJ4KDbocDXFBcD2",
  "key2": "3R3MYvnsjcK1Pz7LGFMyUAHNncKSWX1gZHx7RrLs5ZN6TQdPQUHwJB91bmzQixM3mr4maLcMsUUKpkcvKXEnAMCp",
  "key3": "5tnHVnvvHNFhocg2pSShjskdbLfkqqufhULjt23uf84pKRzrS1PcrTnpcU4NX3dRdVtsuLvfzEpcnpyrPT56JiTQ",
  "key4": "4jywry6GGS1dxRwiBHtKKU5KSHPRhEMSDzQuzFTZxqaLq67nHogoXHvJSBQ1kMjdP36QzUhfxxuf2YSj8znm7dkd",
  "key5": "48SShStVWWZJiBvmesJb5vRBXANSok5w7fNNbqC43CauAnBZa7JFonazTLSM2YWmsDTxY9wewxU6D5w2fU3N6AXs",
  "key6": "5LEAj663RNKxuAKm8EsdA7mu9AtAcQdKpBaYUfcNYUnhKXoMsMPDnpzX7mY2YiczkqCZP8PawfP7obWV2YnQtq1x",
  "key7": "56rwAMPtdQt7zRC1yyDpiGUKaTwjpPqZMDqBMMsFNW4vCJU5ujuxWKNFMwQMJ9tphvffUUDxeJFA5S8pNMZV4gV6",
  "key8": "34JzyhgHYfyghCQdRSgBi7sMP64HoCQ2u2EwC6MTpMi8bmNeExVbLbP1JCz5d6bxjZMGWDEXo1swUoJBKKXcTzux",
  "key9": "5FihtZwZ9gNwVUKCLH1H8uQLHFBHh62RnG1Cc7m7a5GVJKTB8UK3No8EsxUJGtyCQ6N76mn7kgF13DN2ELBUCyBz",
  "key10": "3bPn8b21WDgmSSL52QVZLPf9gv1sBBVPjmpSVQYqBKGM5FnGhWQq4QMxSH8RiSWiLmQXByYn6DEydqv5bz2Ct4MG",
  "key11": "3fx3N5tGVswbngeJKpSSdMYkgP9BpJrnQB9fidYgeGo7gLYnv6CVhzP4JBwE85PH1WmRqmRwe3eMT8HQ3cKhdTms",
  "key12": "36M9rextrKwrnMZmnFXywRpFEBych3jkwK2847jTmCXe4zQNRXfucgc2e94hjYrwAVCghK9HdFbRUVHf4zSajTGj",
  "key13": "44L7bBmfDjTBMakT2t3KZb6CcMGgaWCiAWJhLp3CqaL7DT5tiDp1FitiNTzGqw2iYXuQKZqZzVfsa2FqU8Pj8GRr",
  "key14": "2Ci7y41ctfV2QRPimLw9F8RfP8kGQ1roeg81VjWsQm9GWk8me7fVCbcPYi8rFVBcYKPpWRdcWzXLoqWCXRiZkrsa",
  "key15": "272qsLjDCz3mUT1vgXhbwhg3gXZXCTPSGvhW3GRUt1B19t5GZysXb9uzE1bYpmD5d1pgnsTGw5ULU6TT2qMVQ4AF",
  "key16": "3vDNZhWBW3cY6VeSooiPafscmTAbJ5GiyagtGcR8UVzFgTKMoSA3MX3s9nEGdhKhCTEAdPXZgJhdPDdtGuqX42Fi",
  "key17": "3LjEPuyCWEcdRCmVqPhJ8fNncbuQhDqt85oZ1gP9K81g8D6ZvEcEVNsnk51R2nq9xL8iy26TrjvgG3iQsVevTVi",
  "key18": "56xq2oXw1MApENpZKmxStKPV2dabYUfTyK59unV4hy4YyAZbdo54qZ1zZY7A3zFSmofBR3vo3FrGeyquTXeP7wEx",
  "key19": "3pFZXf6uEPqgZDXURAxCx8oLT2Ut8nVYziw3KzuMLy9s8DhcbAFrbFv65fktx8EabTAJDNSHjyLhQy2GzdRp1Bew",
  "key20": "3MCctu9SoremWZm3mA3HcGeiY5WCsoBGQ8AS4tx3DMXPSH8X6M6s2R5CNsh3QohxMjnTfto9TctWC3NH3bjK2h3y",
  "key21": "4ioUS4hMkdUmq2eMvr5AbWunu5YeeJ9T8hXrt8npeyGke86QQ8UdBYmBxMJHDx8YU2Xfc4B3y4aPVzn2jWQbVKdj",
  "key22": "4f4b2RDo368kjaZ6V7sgmQjbox1btNhUpFL8MPWDjzhehuXQ59mAhXZaGLr6veCfT9nSWj1w8T2AQjxLivmHPQkz",
  "key23": "3gF3ZUgSw7qCaqmAHE84byViVRYRhUKCipaQL1mpDAPgtCUaEiGnpoTQCyqgtHXi2p7YECmNNkkhWxpWoMQV1K9u",
  "key24": "4BnZBoV5SNc4fJUKfpen2u5t3DM1y9biLahpKj6wD4kMF1Trcaj4yjmcxT4wtu1sLxP7TFRQvZN2K1ibbaiuWJte",
  "key25": "jD4ScmjQVM8CTkpU68WZPcv7jaF1uXmDnLmbr6ZaTAwLn4EAmuvAEc8swJ3pE4Nwt7m3ZPiDs88dga4qg5UsHvD",
  "key26": "3XErYro19rQTDKymkvEfkJRf8V8p1ZgpX7dXxZeoJTeVRDnGrNSmj7jB9ByWSQHbRTUsVe6mCU17QgAsuQy8XT6c",
  "key27": "5mtBuGsoZqJAYjxsACJeZSChk2nprdSsXKT8BdJPKqdLzMWCuJ2trAuDA5x9ckY8JTbkcXPYQgEyHmE6zYnmMbYJ",
  "key28": "4SAgUF85Uf47CeTyZuZG8xgrrmoRP3AfSaU23cCmqKnAbDWyotaCPu5yPdujnSoKbCJhzndfu18nNXurQVGQA5U5",
  "key29": "2oUf6F6gXbBGn3jMdh6MP9MuBxnjgASk1KXDCxLUpJYWYScckwNdfYCj78Qxx3YpeiZ4DFbEDfmJSM1zdCsycfvL",
  "key30": "3EQeSWx8KxB3tqXBLPbsB5k74tzpQBuGKvhFBB1Jsk8tAsfYV9EUuEmwnNRNxnsxKRjcpiXDpGuupwUudNyGC4hc",
  "key31": "qSDxqbqdwoek2MDn9so3JiijLnEYATuwnkd5FP9nLqFY8NY9Gqf8en7nHGBScu9vN6j2YwPxv53GjtrVdVFCNux",
  "key32": "5GLnXXcbKtfwv3ZyPbmfJhQccmjXVaJyCtMF95zUkMRBeJB6QENrRhksRuMMipw8r2rKfKt3K9KaRkfNaKh5o5Bf",
  "key33": "2yxjRffcyCKuFraNqewS4ste9T3EnqtyorBtyz4vANZY2RQ9qf6etA1YFxRZqqKcWsSMr4eg8XGYuvw3dKdPXPWH",
  "key34": "22dVFEGCSCAk2hSHKF1bZC13K6F4KeGZtgC436cuNLME16YErK18eLy88n2WWj2txUoqr5asV34yKfKWiFoSvkTB",
  "key35": "29zwHzFxHUwkz6qeEb8LY3mGLHtrexKx9hafmoCFTXGQ3apEoL65gfRuW6H62PCwEKS2Rn3cVzfrwYnr8o7gFCxp",
  "key36": "4xafEiSfroeUg7oZ7C9gTsJMKteuBPVcMkymYaY3casSG7gyyXNwpkN8zkZBLurzFwjC9rzK33GhiMzBGKeEX8Lx",
  "key37": "5kSVf2NTBPtJKo7BMeQV79PtDkjABjP2QKxAwRC51egDX5Qn4NiaZWaJsDa1A8dSEfifFLKz6LD8wQURTNPpmVbf",
  "key38": "25QGNh8c7Xx3Jiuy2QqVBzNTuqYtqmTyYoibbdo3cHnDC97Tbq5ByMJ9vf3KLWLaGAtYKNvBdygMdE24iVbejVqY",
  "key39": "56mP3ELQHK427y3s6RNhWeCXXZF3hRUDmngqooCwV481DWegXjDi5nQhJGPRBU4B35LKSaG4LkxhQcwaSRsF8dEU",
  "key40": "2tZqJxVuYY5vWwvud4mhcyY8zaPw7yvt2AYJw6E8Bn4iv1w5TVXfU8rsvrWmAGTXd8QoAJdbGnN6srbSGrUV4dJ9",
  "key41": "2zW32fR37qooVzxvg9RCRECUxHFHEgiCGdPrYbnyimpEGs3fpEcYfNJhEHSFAvxfSttQFQDPiNakQtyviiUu1HGR",
  "key42": "277L298dESwAYX2oLbfZrQh5ARDV86Kx2wXTfpBdLJufaK2KWQmkAFoqRs48qSfS7hiNjKdr2aQsKwxfFF6NhCKM",
  "key43": "48oLKmncet8MtswWXRWNDoLmfcafAtUZpTm5gqYPSA5iSog8SnyCxc7wfJu5SDnB23E3sEJUAv48iant6V2sqVbo",
  "key44": "37qQqj1GnQZ29kEdQibyqsBo5mpkjKJDW12seb6U7bPx5K4M3HLa8VPux2opRLdRRMZBQnsNo9YfKWL775n9KxFw",
  "key45": "37yk65h6eLcyBz6B658ScJZicMMetkDKRGDbBC7FE4FypZs8pcwm6GvX8UmMyYHRgqt7dbreN9Rwfnj8YJM1AMWD",
  "key46": "2MWSu9qFr7hzhdLBb9z73r7aF25sf4PFBqxmV2dTBxp7ih66bvoEcb9L6dHTQrjhVhsZ5MWjfbLYaWv5GX3MGExG",
  "key47": "36GfLXAnBoeB7EtMoybXXh7hz7hWYUa6UaqoqXpzXuQrziFpAYtkUUwsa7oWSQ3bMuqd7DUVDtsWuj5gqC8pcCvG"
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
