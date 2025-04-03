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
    "3DFVXW94KKnkMZtUTPgStrvyAfPHxNPCXEsT2tJVbEFWfBoPqZBLCr7teFpwiPDLCTaXL7wdobaFMw3GTkx86LR4"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "bdeXHHqySZxkYC7UYti4MTiCVTy1kHYytuTsfhwZ5DNzEKrP4wdfkXtbSbg1i8pdsz5s1xuwaLLsYSkip1nFhmd",
  "key1": "QuQMsHzZAj2L8HyDLhnCjvwp4bYet8PpyhNfJW5MU4UDzihNvdgkqGVmUUTh74Pch6V1JBS4283sDMsrVniVwHS",
  "key2": "5maB8WUbZTiwyg7oimrr8kVq8oRxm9szA1SRXCptsxZ5CW9o6dNcCDGdoMeVK4bxMietw83PzsK9KWWEcHrhigd7",
  "key3": "3kGg4AAdmGuCd1YLEZPtmrL4Fsz6DEKapUoWRHZeSmVoCX22jeGdRNXY1Ln6shesotFrZcwqJX4dcSvCzHry9Je",
  "key4": "2npyyPiyWafsoYS6QueRWkLyssTdncpcdpHby8zGwJN4jBfvsYvBSVAK7TESuFXYJ75gsUdL23XV7sNur8sQ1XmG",
  "key5": "479FMpmzE5o4pmGTqAsDoqFQsGLvJMaVyEa3FwBoN4D6YZhKMHj482MT2TEPoPwxpjFNfg2FUf3BokP3CuX5enCz",
  "key6": "4eHtM8qDusokQwD11nmjzfbqCh82B32HYWKTNcnEvXDyhbwrF6nciBt5FLMuoBveedt7cYvBAXDaKDWoMeN14pzL",
  "key7": "4qgstKFdWmH95hkFmsZrHs5pLESFpFsCBYht1aPSCAxLxG95JcNq6qvTxe4gCnkwEXuZNeGWPue4KXf2qU54rrNF",
  "key8": "t8q5u16P85RNpghGp1NiJzRAhcBt12ZDQFXgt7ACHuHkEqcQ8Zm7jtjpgntshYYHHq8qudRzcrdQPAEx5yXV2kJ",
  "key9": "3Bh8DnwsK8KzscCWQqaMnjCy4SdzET3YwjqUcjJ4C1FBeuoBNorH1rU2RNCnHhQi8eBYz4pXJTB1M1iLYAcwKUm3",
  "key10": "AKaqSmxrM7oTFmzkYt4xnYVmmA6gT7aco7owfix8JyjkeihsEUdVZDJu6VNcfbfaUaaFdCNErJ3dGzTDNt9RtRL",
  "key11": "3XSZDHiZtGk74F1naSUP1584FRiSncNcPfeEKUoH97ZhirEu5dVJdscBdAAnVKXMXGpga3jyvojrE8xCHq8Grtw3",
  "key12": "3ovci9M1ibkqMV2JQDXFPYCB7i4gzizbvw818nHaZRQj4aKtarFsYjHT1UxVays8iDkAcrB66t4vq6NeFrZrTjpg",
  "key13": "225SFbzCeKhtdYZLdYhotKJyRx87pFSFeC2J2YJ6raztTRQGMuumov5j7j7HP53YWaMmrMdD3nLotf16bWx2diLS",
  "key14": "58EZMTKeH8ARozwAGn3moBPrvsxKWX98mevwJ3ndaQ3oTbPNjVnNbm2ZAdG6czBro5KzoNw9cCx7LouEepH9cJzj",
  "key15": "2RjNBqk6jv1C8KbVRG9ctHFj4J9tzdybVfJVYqNMNiAv5roTWm73bYPztUFEuFKZ8ADuaMrXTiKDXW74K7yTRUbg",
  "key16": "3wnYn6RvnZgu1N4eEhQpErqGyzABdmVfZrzbvCcsiciFyVnpn1AU873RzZZk5NN1sy72DoYrgKeLFFsMsiUE6Nuc",
  "key17": "4sFK3fDJKaZ2vnHSaVpXwk1A1Dce5p1ntBYZFBSqexLyNDKRwrQMJ5zMu3yq2TfpGZgkPYQrQbTQcVBTyF1mMiQB",
  "key18": "2ZEQixJiLwvVjRqtjqM3KKAPFw6wrGCzhEugzYCswtdXBf9kB2pZULmNBv1gsXBf91NsWnqga3QFGNDxRv83xvwL",
  "key19": "2P97K53whmUa2UPatVta2ib8kx1RtoEWgfsjKZjDDY64iws7QemC9SsJEcSpFv1LBSxP5BsCaj1EAaKopXuPVarQ",
  "key20": "d9tt2DkGhrty2QXjq59YgWWKft8PUDh1GKe4mGDREMLkyCJM99dsoCaFaFebRd9xWGrK19XGq8FScRQn4AnmKww",
  "key21": "4Ycc1HEQVYeeKa63HhUu4WUcKk7Q993DLzX2r8ccaEkgpp45arecM5hUjH9NeNBYjJHpnLtRrJ2ufnzQgRgqrp8Y",
  "key22": "3D3MnCedGFUQiHCEoGHTMEMHxX1fDNkLLdQcmahmNTJQwXJitQLw16QncAFEHEqzKi8wREN7xEio5acRFZ6tUWMa",
  "key23": "3CdEXSKZPyDxRHYSkhqLQMfbPvxxumXqHEDCrA1rrYThoBQTcwt7nshcwbWACN7wSue4CA4FFr6DAoZ7iHyVFJ2F",
  "key24": "ZssD1MpEwZbphUFXKNJ5mFicQwUv4SZwG7higAE8jg7svk6ZxaHesVvwtTDb9Ywky2HPyNmv9Th2tJaKJ2LDjPE",
  "key25": "2oyXTsiGxggMCCD1ZrCykNru9kvZpNtRFsQH3ueGWdo2rgNm5ihbd9wpLipH7ktsHdAY9bnSUZ5tUchv4bmmMriN",
  "key26": "23C5qwU4gsA9orNvHnh6by54oEyRhHUo4L4FVxWy4sQVwAk1WtZU4kj9yD9mQxbg44jTves6rgpXCdtNfyxUGGjX",
  "key27": "JvFxgAvyWVWuSjE7QR3TLjVAeb9d9AaCF157ru1yQxpj2g5w2P8GGFTtVKeXvSabGZUfYszJCXHHSf71Rfikzca",
  "key28": "5S3pqwrFXpM9oE2h73WctFY7V6TFSTBWFNpswco1pVkjCuvPrcydPTRzjnY5dbfsB2isGsRwpuE7NKsw9UvQGhju",
  "key29": "5cYqqhyrEEtPtZDGYaAQVdDm1s7tjGE5jGy5Lckrpg254rKqWdkiZaJniZwnT4XtqLMhxXxLE4m9BXr1QvLuXp33",
  "key30": "5yk1qCFKeG74c3a9FZiNqU37Gf913WsEyLoM89pDV4pnwN3bQ5YUSRG2j62PWV3tQmRuszUGAbMN2Wd1QqftZqet",
  "key31": "435ik68VNmtYYfwcP5kQgfmXCy4SngxCKze4YQ7qk3pE76qEvSwo8LbamCftB9UWDVL3fhgerxZ6fMMpvMJtojak",
  "key32": "3jyG8L5NhGBQmV2TYjAF6rBYty7BYoiGeEZGcVgZpBpCCqBd5Md4VJ9CZWMWQua3ghwCkFny1a8eFoZZpZuyByRk"
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
