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
    "3JX6TXbz8e4gHc9fNogPN9pwSoUWhomV2WT9p24fdiAZvizM9bCUtHUALnp7UkVrk6ZQWDDuAsFEvjaejsmJ4odr"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4aND9ro1LVhw2S27YHeXx7Zaak8xfsvxzVbp5JKtwLWjZ4s2eMv3ntpNmnbWq2vGuK8yqcsyVS1ZZJYjY7VVAVD3",
  "key1": "27jUj3rn7j444mmMxptJkRBUGguPbquvPUwRJ63V6ZLrEGFMAoFf9714psdvuGMwuc3URaFXqFexVEYAEp4trHta",
  "key2": "zshjKZyHH6xEFgQsiK3vyXoZaLQ2A1ChS8jkttXuW32a2K1JCXAHu4e3wfKsWxt4XZ3HGQDHtF2dTGdhjFyZrAR",
  "key3": "5CNDgkostyWEwZ1q1Cs4vTVQCky88NBjecyDRp1yow6JVKR6pE4T61x6ZBNPuD6w9cPKhtinnoEH9X2ZRPUNcB4E",
  "key4": "4E5jY1nEbNwzqBoqV2ZKQAPppenVDaPwfscTMdfTV282pfZcZp7HKGjsfBa3RJ4edxfpfQE8NBfLB1xGbBtLGNmg",
  "key5": "3tRyRUKz9FtZgCTKRFjAeDHEhitKHU4HpSVLV6k1cHRxqt9H2kYyNAv2Do56uZDDw7qeFV6eniepWhvPnBcAW8sE",
  "key6": "28uoBeE3WSfk4RKW4tE1dGKJkWhtohfRcEfHQ9LeuaqfjrfJzjGAHSP5YxwLdTPxNxS6EtB5TrpRDzM3mY5dCxJL",
  "key7": "2svQ3hAq1tcY5R8s8wFfdMER4uxd7qw5XojmXHrnDexQLNa8gQ76zJW9u7NPcxfyNtBMfYYyoktFcejz1R6PyWC6",
  "key8": "YF9Ac1TBcctdg8VTzRB7Wcuz1YN9yyhtLsvxxqZBdiUuGQwMjEaVafN2iYDipRYDEL9Qsbnat4HLAvKyjuh3Lv3",
  "key9": "5oHsFSsMf9wPBaXF4PVuCy1bNkA9EMNgMbBotLWYEGVos1TSYAdPFyP7DDBh1CGJoMeconBAqXLGrrLbPesxfXhT",
  "key10": "ouReWYZRLLLUKZ1uwppRaidVEFgpCuZMcMBsta6nEibdYv9iTPN4ynfcNuWFkp9qDiHwuzVjeVSw8wnFxun4Wzn",
  "key11": "3KVAtrQsJeXKWq2Fde8uQWu6hfN2C41wFRyFracRZwkRkYZ2dZhtaCsvwLQWqyd81qT45nf4BWB5zSVGMY4mPALQ",
  "key12": "4TAVbRGnyp9oVF6xeu3ifiBc4DgxHDN7fsDiGVwMBgvrzRFuMS1vSgBL6yEgQATbQi4W3MWcbRZaoy49FxTnfLRd",
  "key13": "u65VRu9jdd5qD9LsmBEyowyV7qi9w7AN3dejYcTFTFqKqgnAxrjbjMxtaS9FkgpLFjX3rPV1c9hURAT5vCSZ5KD",
  "key14": "5uB6gfbkrf8couLuR9rybeXGuYF97Gz5EUgdzt5od6SXBPiV6NRCUmMDdQoKonWraWFxW7s7R6MahoJKDZcRihhP",
  "key15": "4joL97HwMjaTGk13K4zrDzK1KBTF4DxbV7gumHYceFW5gJii2Fj7XXbF4k6QMxoUDagxLLY3RbZUVGWLMk5oXUzT",
  "key16": "4s19JXq2sWykeD14pGS34h5pBw87w2fGxjNw1biAH3YicjjPK1vPXfx4yrTavCKYMGDZxDK3wtH6GorvAX77TjPW",
  "key17": "32dNUy7iofQn28HccwjMntzmkqx5RsFcqxX3DJArQdQVC9S7MyXbng1xh1XTkegCwvkXg6Uooh31PKgVzPCXCzjA",
  "key18": "ffdLLLiW5GEn6sMo8C6hXidYvX8Ncr1vBecyD3zESnqQR7ds9fvYpdsGwaLWru64fBhAkZGwDUqFeX7PGhQYMy7",
  "key19": "3LcY4Hn1gdYpBkAXFcp5QGe2eRoZR53xPsVBRBydmpin43oZG1knxYxWFXLuVQmF9cAX4NhQTPYKQpQvcDvHEDWE",
  "key20": "3rxDvspEveRoY6Yc6xWNE7p2wWK5tthbJz7nP3Yvx7EFSnfpW4bhkrDNNSiKQ5uGz6N9JL79Lmq7kAaouUfiL8qb",
  "key21": "3fSmtGSLRySHySv9aQWM4wfkEm5TRdeiEhv5XwhVgD44YJQhakmTMGffnEnYd5GqsmxXDcqp58E2ujJ5AKSC5ywZ",
  "key22": "4gf1PYJFLxa8cmcAurWq7MFtNRitGRdJqRcw8n4yU6NAvS9Ea8LsADDusmPh6k46GEp484CMUbuqYnznXSiBJ2ZU",
  "key23": "5xKtvfcHntbsrEjTe4tvhXAuwu3XeTTf3ns9f8qbHg4e2XUFAjPNnY2pgcsJN6h3pjKWnMGpMnRbUvt6QmX7zqvm",
  "key24": "5JiVwQGAkdT1CybbdtUix2Rwj6dWgLn4kPKNhhWSRjRsD79fZcos3YhKBCnkjJB54EdUHyUSW4zUA3nhS6EaG6gs",
  "key25": "4vriR44T4Da5Fph3TyLE9pfPrixHqXFcmDxHyHpJ1noaBuiAMsKi5KAjs8U4KrWTzj8uQCRhPBWBxgENkc5iT68F",
  "key26": "2Zzc1AjrsY9aSTtzGbAC6yQGPYJwTegxwVqu4b2cGdgHZ1B3px7wfHENVk2B5iKKFE5nxUKdrrBoQx9EUBshpDng",
  "key27": "2GSAPZqJmrke1ZpN7RAN5ibJgJqoJHo73DsWdtgXRRDgVGKVAZZXuv1tZ8cvzrfFeAxEU1ib8V9F1r3iTXENW7Xx",
  "key28": "tzi31NZLzCP4ASEN5rhAvPa8jRC4FP9eTzdTaaVNvaC7CwWPNHSKm4VoxsL8F2c9wqMqwHQjgk1bis8a2P83CBN",
  "key29": "22LTrMWQRLhuX4aYEHbKDLA9JqrbVkQN6cRJg2vBcMA8EmG8nxUX82RezQGqZ84E1u573FJhFubvJHmvi8SA5EZx",
  "key30": "3Wv1r1e2LznUtG9TnY7jVD1CrE4CKmsssibUMLgCfDenerf6QQSfdCcmZCJRPXRKgoYeN4ipz817XvE4opWpgeAN",
  "key31": "2CZDviH6T4opKXbijDHXG59a8sV83xaeJ8hzXFk9yiMjjixu53K3SDVYyb4NkMaJTooMqpD6TyfxLWmYsjvp3qqo",
  "key32": "3SedobVxfgPLU1qB2bBSVfDcQtEWSFeuZS1F8Kv6VhmeVDfoBRNSZCBU1yQoPNy7ixSjNrgun8wSffxAKojxf7gG",
  "key33": "4yf4GfLqLWViVatCPYQBXYQ5MukTzXCNKjUjKyWPRn9mC9RMRuU2pP9P6MPfnAg27E5ZtjsT7yhzj4XjZhZgzJBS",
  "key34": "5mXaXVU82MXeypuHFaWSHVu9DWiALAabZGAJWMw88LBAH1aHF9TAueY4F2sBkb5YhWfsHa4A8vE2sErFezwkYXtn"
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
