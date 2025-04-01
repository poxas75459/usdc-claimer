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
    "ZCCWmDgN3p8onpom9vuzGFrq92wibYTptejQQHS8VYdjZMak8zA6TF8VKuEsnAt3guvTzMBBBgDQsxHHaPm7vUD"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4gqZYWRJvWNKNPU1MbHTh1F7xu7YympVex6qKzfaSa4cfA1TvbZHBoGLGch4ukKoeFNq44vePkZRmAxhxvXF5Db4",
  "key1": "5QEfK8h3PgVPidDSecSAJn6wtKtcgR2oGbDSgcdQvqB9iu9yKGsdhv2piLTBHoDsiTy2aSDpnkpxKt6HjTazckVe",
  "key2": "3JKqYnhT5r7d93o4Cqp25MW39VHjpj98TRx5mV3BZdmFLPqbgHsxJBd4bNSUzuMbZBDG1SWFMPxyS6kDyAgQbHYj",
  "key3": "FPjJH1YfySMr3bSjJ6kPBMGCFX3gQASTbSbUvkwZuUmxk7B6UYoarhN1Y88cX14UcRHnQtQjqGueBrLb7dRwrDE",
  "key4": "4zGxTmgoSQiSJUae835cvZ2HtZCxBFZqmrvcHVGCj6gTZVoJe2HcAaxwWUFNsFNyjNxwwbPAYWap6opYET11Ej6Z",
  "key5": "4kwJvumosjw6QYM7k8HBRSJYevKuveGjMzujqEtbTo3PM2pD65Qtn42xkvGPEshqhkxSpT5DHEYaQB6zm7KRy5aC",
  "key6": "3GFeg697owT8zv275zzsRmEFkEiZdysyGxhKS2uqnpmerSVphbydPB7qZMstbNYwFi6rHcJH8fZCPkk6axG3DPUY",
  "key7": "V5e4Kso6Hw2wtj3LFEWJh2JHkU7eAcNEDQSo7mhAK4g3mevCnsz4Q3xeVH93Ht9TnGZfTrizkLR5YtRa9U9XDvr",
  "key8": "4nViwmHeCYjoXcxm3RRErvffBr91HKV3Wg4GJH6zPyXiQXZMfHZe8kGdFLMLsavvFFcWmGUTGk3VAp1yGSf981f9",
  "key9": "2fH1iH2A9uDpvvkvmXUyAjYbvzqqDkn5zYctRE1XmJMhXnwcYx915iF3nRNMfYE7vMoXnru8pkRKkqJ5pFDmyLQX",
  "key10": "4ckqiN8qsami5i7DAbYSK86xuBSpXXGZwpWUJEjNC1KtV3mhE1xtUjfnQwXZavfgJPF4BvVQKW8YsTV2oufWRJyx",
  "key11": "WLYmiu7DwLSxx9n7RDAZ4dLHXQfsV1D3kMw4Bhtv7F2FjSPiJL1x7vo4H5cMeYM8b4f1poY1Dz5k1MBthkAfgHL",
  "key12": "5eDajPNyjprsDJrk9PhWQ88wwX5u4kyKkR4RAbgcbXscJarHhK9VSSSmrJ6CQC71g2a7CAoMYGvyMhjby8MCaaVH",
  "key13": "5DkvjmqiE2p6ruRbdf6KVyTpDy4LoMLLziqSdU4isVzuR8TncMXYy6wBJ6KVSnbtpzH9c3eEQ1SQ8Ac5VjRamhZX",
  "key14": "5cnAU1WzJQyUWnhMqoyikhjZ4qgsSzg51fW8k2zqvXCqT5vZhZREfaEgNaz6QcSFxjHCeVBR7Ze5PDptJVmMo72D",
  "key15": "3VVLVxQNAXwZyPa7eV8Hx5Z59FpWQTGX6AoXnToNKYstE65phrGcWp72ngjH9m46a5e54KrDJ6Mso6XceNgWaDbj",
  "key16": "5T3SzVakR9PXsJ2fzHwoNJcJQzK8sgB34brDWYKzRMHUJQwekAaEjBagxE39TATXX4EN651x7kPoJKryP6oBcfK6",
  "key17": "EigpxCPnAjuKat6UeUPR4rkZnqkL72HN5Rvu9MAnM5p1nAVArFxZiHtBamkh9n9wfwgLsh5AMxF3jhhazTfaF8e",
  "key18": "5oBTU9TgT6jDTMj9ujXBVNgkaVnmRppSFne3YpKbngwoiUAHgZXHyGm5Sgmb5XqiZWjCfZdE12Q2JPssLowGuc38",
  "key19": "PAGsxTJJStRWKrck3ViqFezyspS9LS1owXhpBGfmYaaDAEhLFx3iwmvJ5MeptWj8TB1fWMboegVU7kyZ3HMVrpy",
  "key20": "3qAQ5tJmvMoGvbG7ZLWZVzibGE6cygJxWk19ACVNt3YFEqsqqTCFawNvjXnfHu6WA89RNx24ZNR9WMqbLnag2gpV",
  "key21": "3g2rsDKbxFQrSQFfGdoyYdpPsZMFcV2NHBtGD35XEU7Wj4dedVhnFdDmKbfH3A8vamnb3EC7hbw4jvphLCPGGxLX",
  "key22": "57Riru5MnquLTysR4p1x7sLF7KyHJtMKHNjy4nDdpjCDKk6FTgewBYYd5JARvDkGyTbw8a51c3WZe5ZnDRFsoP7Y",
  "key23": "2C8AYq4Ab47DgM9Ef5cJtMbUHqzpBijJXJ5WmHk472P5eKawRVf3cfxpNt58xwHYaRZ1N1RX5hguHCvpJpf68YgG",
  "key24": "Ruy6XumcPWDzc3XQ6aZ8iKR8aS2T5R7GVDVP8TsDS9hQyh253L8MfVb11HKQpZ4PgtuPJs7Urob9hqPVF9Rr4gz",
  "key25": "2FdfbWQrRwkuRXWcNRqmCnHLBmYDFxrfPzFqt3PQEam4ndvyTqvcPPDgz2pvhKQpGdygZGWHSp3BpojEcTENVue9",
  "key26": "62wuqWdSKFasq98P7hXKyd6hTLS8wet6Ng44bur4sXTpLU6nVtAUiG2tPxRCyDy3bEAU7aAhvDi3EQQt64E4iqDG",
  "key27": "5Z4ui5k7ERmUc2qFK1MQzat91sdbDjdGQUjixk15KZcSPrsafvo6Nrt74wvU4X9MbtMBozPMkQQ9r9MKTLcqhmNa",
  "key28": "2hqJ784cMwxcLBNR9dHwSvDE4GCGDn52ZM58DPf1YE3wQvdbxhAomr7cJ9vG75f7oGZTiHDvpY5zFLAb3A2eBZDg",
  "key29": "2EkUkYoM4JzgiNFj61n9pJ7dVTMJokorwH7rMdK6KekhngnDHCwNhnj1ZX8y1Yn34Twhg6rmprRwsnu52UKDUbM6",
  "key30": "4FuaNwR5DQ5LKcJXiHbhUuoU6xgZo3cnuuwoCCkfuaxUCQQz6DURZ1j8Ukhmq6o7361crzM6cDkZmDnjFFGpLtkd",
  "key31": "ACDmiEKeeVSL6sH7c23hsiY9F9WHRTcDsUT2VedC7HbirEPyzm1WmbhgbW3gpqomNkQV1KU24xFq5xq4QDZSRrE",
  "key32": "2C3qeTwSdxJZDqc7DmdWi9gpMKVvLg4pCNgmQLmg5w6117jF9XP1YCF8jToC3dph6DjpQWncpbLcGHBFWssdyNje"
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
