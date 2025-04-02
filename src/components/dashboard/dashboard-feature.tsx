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
    "Fop34FaSKZvpYqFqDj25ihMzfbQDx2QKSL1cM5EECmngDf1uJjmCNdvZXuRyWz9Me1hLjfDWxdp7CBBJ9jwfpfm"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5FUFEkQqvbLPsj2Rr3TnDx66eJrATPgmtMRFCairDqvfUnXAPpj72EeYNTkS8HAigj5aUriv6VVuR1ZDRkAZWVZg",
  "key1": "2s4Esd1qVru4QRHcddGZvHHJFKpj6iwVvgrNEPjL3LDvffQPTBk5xoGguC7NTLJ2qPzr5qABM9By1dSmJ9DEfpkE",
  "key2": "2PyoW6PW32vLzyEME12ovjzDfP13N4TccJAmejG9YUkVbKJH3UPaTWVP1idjRDQWw2NhozRah9Am6oeBw7x7jpAF",
  "key3": "fkRDVoDM17mmMEGHPLwBtmk4GYB8M3XSgeYdQVsTzKYxvctbLWDTmGb24qL5rMJP45xzGMnuZFETsBKRURS4gYC",
  "key4": "5Dr1VM1VfF9gp8z5pz7CxAMEg3yah1sA9asWv73gStJ77TCebBz38Lrk5fVMAg3TpSkqMRHHo6vejsmQju521Twy",
  "key5": "3smHLvKUvtKGcmCcCeugJTb9zxiWbC6mZZUM4e5QdDERjMbWpiKzbm1h4AfKqHXyjcMnADB4AHa5ZZLLq3wagVYU",
  "key6": "61XHJXgto6S36wPoiB7yAAQ3hARTQJmkgtZkxrs3s4QQc7gjMdWGf2vSzP2eEsNuKvGPVVJoqcWJc3jVuLpt1Ucg",
  "key7": "4tweodLe6Uv2H83c2ugsqfhFW2G57BdhkrAaaNBNc37kipGTbptEDZfzcL5TnxBZ6Q3FRHWVqHBirPxosY7Fe5PQ",
  "key8": "YJyNVwBtgy8Ya6k5qDh59exvrzMNqy8CprgU62myyfT9TPJjseb9i6oBKT2gefkdG4Zwdij4fTLtFmE4fENTpE7",
  "key9": "56tSfKnVBPJwS8swiE31kEKLYWeBSkdmFeEXbGqgFfx9pd42DyN5TGSWx26GBEhwHcwhS5EowbZ7zV5BMKntoYjy",
  "key10": "5AucANKgE8xQKHs7qqrLPn4AXRgNheUVrzF2ZN9axWrEW1TqtVGEzwdTBFmtMSc5oj7rgAG2P6EHBJR25WFvcmYw",
  "key11": "4nRNc1DS3qU7Yqs1q7VckjyJqTyF7BAztduoKhmp881BgFie98fSF7sKo6n4iNu5SzxoP8CHrDN1CLWpPCiPkKjy",
  "key12": "47cPujQzS5Wtg6dw8r5nnGr53jJR54EfRuv8vKMPoTDAWqGcBBf7rF54SrES3tDzZaMvLptx9qxnMVMCAd6Tn7Zd",
  "key13": "3ViBBACVTLJHvRjRxcHqkkhF7haHNbihxFNtjrFhZF7dRaZt6FbPAF7gMLivSLcBU7EHggwekq3C6oPE5s9ZTWu5",
  "key14": "UBecXZJ4eCqB69KAGAG6CEtJGxCyfQXrwUpuyik1ALCfWA7m1Qjpe1bLHpJ9KZU1dvgzoiEkGfGdhXPCNZtS1yx",
  "key15": "4maVSVHoDtcbn2K2bd1YqAe42yvvaGhpoa7wQQwMbdRnJt5RkwDuvQXjYiUbZfXEXTV1feMpTiSCxrZj1bycdGLU",
  "key16": "k73eCKaWk5S94BfJVGyNuR5oQzdhFkGvXs7QyzEcy6nSLzd3XazVA1VaU8mkBrZFJgL8Q3B38sLWmYAFCadVqVt",
  "key17": "o94BvpZSmhp75ueghLUF13F8kNYUBRTdhwtBNHG9wRukRvS3MN3GDmh9GLh3nqC1QKp9ShhyHpZoSgvgVEDfzfA",
  "key18": "3mkxA44iDcN5h3KZkBb44RxoYVQfYvrZPk4fjhM1j2TNECCn9JTYJxTZhQQ8wmjbu5y517ap9GDCD8BPMg9E9Z4P",
  "key19": "5Z98mhjNFaESXFRrHmtNvZar25mCf3mMSgtgUupwcamdUENfUHKwyjZoCn6B2mivbUeXxqEoGXqDQZm2h5TDNbn4",
  "key20": "5zqg5NV4hMqWd4xewVCpUPvPJLAUapBVMg52PXhBRPNfVty5nCEpavxgjp5qRUUsBYt2rqb7SRmMyjhcWyoTfkuE",
  "key21": "2qH7iStkYGrd2tEoEVmrZAbPAcBnYYnKUJ2RFRZtyCupfy2Sf2QqV2BFbL5V72vpJFkKV37tDyw6LVBoJKFShNVU",
  "key22": "2PXFj7YBKHUVEtgfzoGB3tHuyCeoq6C7Ueh94qbZwZY28GQgpbUPvfi3fUKj99wDRB8PhwkmXgareH5p8F68ALJe",
  "key23": "4CHZsPEo1Z9BBAFD3uxZ35LbUDN1bBdxdpkn7fX7g3TgWXwprwLZrhg15ydbm8MeArhXd6RQjXyLL8cjVfN1vS1i",
  "key24": "4DKVZNRRZaiE7BP8VfLohbTAFYpdnVozirEX39ekkFLSzSmrSuep8sHTutvCzqNCuTZgEGTJx1AYVmwAcVEjnN47",
  "key25": "4q6sMLeH61eCbdeJ7M2LKbMPFvostqi8Wmfs8FVnqGWhEMcZLZDt9VF7s5yfsEn85o44xW9VP43Eh2LrzKMxSeyD",
  "key26": "3atBVh8Zqfgb9V6qDutnAwQFv4aiPMZxkzGA7Gd4Xt5FHRsDtVXgC4mAPWzPGj3SniUcHoSnSVW2PGPvjzn2Tk3b"
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
