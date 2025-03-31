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
    "5U3SLTNjMWEwueTz6aAfteVBwdH82tQMP1rKjrpZM5NE1KzfitknAejLQoKbkAnTabHjnPXxrmpyTpgrh5uVQPhc"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "AAneP4KPDBcQWxQpwktaHvRk5kcdYFikWf83huZgB848R2pWpxHBiZP8FZq3a8Lc9H3TCffpyi8RqN2L5RbXPZu",
  "key1": "WpBWWCF3RwAoGfsHQtjNRQn9txuw4e1LzpoBDbyQbL9ugFaTVbGPQcy99k3eK4UoCbYZApTAtW3iUpcCRAwVs28",
  "key2": "LZwZFcvPH3YGTcGVQHzts32RiqTxWB2d1H1nzEgMq7zVAH6wr1DKVPZoBktDywE657Cy8jRuczcFYBoP5bEHcqd",
  "key3": "3TSLSmQEurL1qRMxF9793JmACYVmtkxVXFK5dwsMnW8GjcU8xX5Tu4fBJFJf2ebAfEwqMYemGN8J9nAA5Joa32Cg",
  "key4": "5jvyu6QFYmVobiDxrnU3Z6zpTYt8YkBymrVrYgxUzxcLVzHXryCQ5NgCYm7odWTeA5diqmgxDXocR6GJkSqEtfez",
  "key5": "5PFwojCA3ZrSpG3wUp12qMWZVt9DqQgcUYuA7roRwnJ8sWGkQhnFvENccyWm8p1Tyriz6t8D8TwLLYVJsxj7MCPg",
  "key6": "5X2aEbQ1hv7uPUZzXVddWwQcXve2PETeVdbjAxgDtzS5BwUeoErQTW1JB7o8Gpt6La9VgGqM957QTAMsAaU8qbmV",
  "key7": "3trxys2E7KWJ3iqXQmS8Bt6CckeHkKaDvgnmV9HLW25jr9o8nDXwC5qxFZDiLGwoNxC27HtuUKGa1ov156j3oW1A",
  "key8": "P7WoCYR6YBevb47gauqcfPF62vyJ7adkt624PBPt3PCv1PdKjTymtBfUCPgjUH5DWgoHTwqWk9b2GTx1YUjcJ7r",
  "key9": "5KFiqENAgqTjrfBRLGC4d1osMaHGRF8absrubLumYpECFPF21USFSJDqfbkjBpGFf8QxRVbLQXNHP9Q1fper3Wj",
  "key10": "54QL4XovSVRF87PJBCagiRKuC1WViQdn2aR5fM8gmDWssypi71ifmBmHA9xdtUDW8n49WoRD1nu7hbpSeUtXpEu",
  "key11": "2Dh3zF42S8WeQqjCaRUjmnzzDXJaSsNsHPELkoxMPqnRFiBy6w5Rx2NGamTu4nakpL4eJxTdjx1DvCNdXYcrAuhp",
  "key12": "2jPzcC2DBsU1cT5Ua2nf8bThfUTn9LJP6LD2LcvkMpJAdCHYBaqfJ1F19ojAdhbrP2y8Z8MjpPgSKeA6zVEs8jre",
  "key13": "5Uq768SPL2az95ZNYcPgndhb9GXSFRX5CA4mcHk8j2a2HUGbM8B3gFXZFkSNVFkyLMYEzFLxVtVhCtPbkpvPK1sP",
  "key14": "5DLuwtSyp8J7QVvYRZD4L4qAqQLrNKvrcKgKmrLYWiCXaCqMyWWDqNHoHgGGsUXt91BggJkgpQtzEPErcNojtCgC",
  "key15": "3NfQjAHnU2dcnGUEuJPgGHGPDHrLowZYUy1us7uukRbW8BkvSh36iwMvmrLWsyZtpNMevec1KKDVMCCgtZ4ZpGyv",
  "key16": "BSfSUzBHP8i6BPbwURzsdZtdeJBzkfNczTe8Qg5Era4J3VyRS5w4Xa6nar6yqppqMgkFKoKV9ELXPPaUzeLHDES",
  "key17": "3Ei1T58MN51fwwBSpZxouHe1ChT6RZEtQHSgLJeD243nSZAFzVQS4DKFcCLeooAhJat1vHUuw3HbWBhSYbzua9aC",
  "key18": "bARsyEJERic5bw6ygCc6rKA3igWHPMCtj4NGiiAJUpreXWyGKxzNr1CHH1Xu9NwqFoaaskv4kxgKApTo6W9oc3o",
  "key19": "3bgkurasuwGcnqPiR4qYLsF9GiD6uAPQZot3p67zxahJAM1eioufUysEaeCSFgBZjoxq9NBTjzHJzZG46BZx2tmb",
  "key20": "L3wFCrfBUJF6obWKE8iqTamR3VY6LmgCAKYnKsRDwYSjJfTv6DmC7NAsU8XDTgAN79WJvysqXoAEDDEsVuT7Ao2",
  "key21": "2w72fwkVxFCmp7BirzxdT1gv39fRMEmae6x2fo1DXZPhdBSVZQoznoFR1GQWfVgczLsM1sTkj5E78cRWbXAferxk",
  "key22": "5cJLNson55X6Jjni2EuS93vVAJPrthFxP5qNS51DsGWzyEnfmRYJkFFfgpYzCdXnAMYhAPTG56bCMx6UWeqWqVUr",
  "key23": "36Q7v6Ep9nF7GFBTdLpai2tWEPza6W6LMMJc2yEJ7rgnFVNdb3FnibdLUiXNAe2S9mzSveMWhxdG6yDnNsRaWq6M",
  "key24": "kkAMj23bSDMCrL6SUN543w2xmTUaTM8Gq4BTPHMuyFfova2s9uXkq8KF47HoUigj3nRxbZQShyHmo3vbSxizovP",
  "key25": "2AbfTVd4trBt49tsytNMwRGL5U168RMzU9Ac88QAMArLQhfm79rd3qZ9CFown34r4z25dKrerjETkVpaB29TYWvU",
  "key26": "DzZrXr4ZSdGVGvB29XeTWbf1U1aHwTq1ZLRu53fuawZTe5kmZdqzKFxW4o5aQDBiM9bR9i3aAqjWujVcVGCoKg4"
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
