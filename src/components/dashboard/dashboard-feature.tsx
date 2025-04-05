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
    "2FyeNHmXHyvQydXxUumMDQozysFMpxTzmnAd3FY5pTA1x1aPSt2sszzkZvv8koCH5TTwsgRxs6kTREpSVynhbhTW"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2u3RymDxEdczowoSdKG6Hv6zSHRHeJgFa9eEUdRHkLpDaiCBoHmTEihhqnaihAMAik7LFbfTxUuK7WLpPzPwruao",
  "key1": "7JdMchANnd3QbKjeXFDwA1Rt33kGGCtwaDGQhhyC3Y6F889nm39JSGinMaFQnAiu6k6vUEGnezZxtDgBwhBkNrA",
  "key2": "26PtiZaEy67Zko8KBsCwidQcBfwa8mH9FHHBcjN6uELFNKxs1EABm8jNjKdxwE2Ew4xKigv9ZLcjWeTZMBHmZpSX",
  "key3": "2oGFgXxg9DnexMisKAaFa5rpb5hYat9xuRPTFmT54N9axbAbwqMMug2bvm93TXizgsCM6vB3jdu3g4r4L7dZx99F",
  "key4": "2ND8aUXawFKGoS2VvHzPRB6rPXCqoHJkabLXXUDY5aak5P3p4MsPfkkfoUgefmfBsDF29do1ohRC1RGCeijKuUhc",
  "key5": "kgSmzJGDXjkFEtq8cawUZGHpKmt8tqxWNT5VfqWWFomjRb6Mnw2ZjYQPkteqvTPyzhRsJLY6TAznm4LLgWqf5Le",
  "key6": "513w7VZkPZB4JLGCHJZXoobZLmatW38eLmRVbGsxz1HB36SzQR86KJtqRdaCNxwQFkp4Z5aP3a92dZv1VKTudZZK",
  "key7": "Tt6HTnouKVYNAzYgAQUfKwKSmfnC53HuH2eMbBMJXbmABqkqgTLzrYwpQ8TqQFF7MfFhzs12X5DPfCY3mpobWsm",
  "key8": "5bdVre19MU1325MWUzQKFDzE4oECpFyhcqCjDeStCgyt1n5YapnXhVu5YT5vF7biQjQsH1QGw1qQ1YJKh9cmzY5g",
  "key9": "2M24ygmU1WR3iGwBLq56UL851AAzEWREmhHweVuD8gksBoqg7oJkFKp24sSB5pLCo7EH5AVF6p6d37oALnrbMW2p",
  "key10": "5D5KT79eeKea2bh3TG8f9ESqcYgpko57pPbkWPQPDGQC64zwgZkMHPa2WEgW6eLUXPeiburbyDmVxDWWLrVYiw5i",
  "key11": "3DrMa94r3v2vxo6AM7dC8gi11HCoW67UZNmGH8bPFDYVHUCJEGJjgcXnrfN7Jen6oePSKDw2FDfZeyyN4XcWTJWe",
  "key12": "5o5FFrMhHL3TotrfpxJCmA6rrDE1uDMAYKeh5EjRCv3CS3eu8tro8pLAhW5etb9umsH1sFC9SGeYsXwsV8H85Rmg",
  "key13": "495LTpnAmCXicptB2onnVr1qFoqozVgJwjfBBbnQtF2718LtSSyMAaxvp9ZJ1fKa3hsLVN1UE8i27UFNWVMQpmXx",
  "key14": "WeLEewq7iA2aCgUCAJBfFTAmuXAfcnEwPee6tgtj1h5A5PXUujrFc5ghDMWwPzoBC2afChJHnjDDZtHB67ASiBa",
  "key15": "4orpsX35NfqXf1J2KhYsJqbemEZ68RTKviDznXvafp7pvhSCrJU9iz4ywkjeDS2GciMkb13W3w6acRLRc5MiFU2Z",
  "key16": "XWw1bE31eE6PZvp8iYQ7GZvZPRY2cUaYngZ1Cpa5SK4zUFjeBC7C6mCXT3dkTpiysGaS83VeGeyAx7BYyZHywWS",
  "key17": "2896axQdJymq3Si2hZZJrgUPWy54i5cY9R8be4dtGVcN23tWLXakEZKewuaM6jCYtELpWG1xhsAEL5epLjATGVhn",
  "key18": "3AuYNspzZ9FxTcHV5WS24C7tGxvDo239jBK5BXZkmw2ZGamwhRx2CYVSjkEUcu5fK5V2ct6HcVKGHkPobCK9QBMf",
  "key19": "52RodiD3eMYmx3deCqa7aUWoLSKLgwsHaH9E13WEoGG4ssYQYJKwAoca6VBJvX2wCwWLE6uFqeyg7eu3WFKz5HmY",
  "key20": "2gh52tWwzmDBCzwARqCVdanWJs9NxH7Y3Yo6F6qH4METr6stkwqnA2RwVMmy6CX3qA3DGQk668YpZxNGD8VB8FS5",
  "key21": "5xmvLA1pPQjWKpK42boRRMjcQvXud8McfyV6tJ32CbPSzBYj1gzmqx8RD2yaNEybHjj7sc8rfh6vvwL56V3xqr5D",
  "key22": "N2dmW8deP5wUKqMoNYiQPyttrVQQGeaxFtXtRkUujtah7wprft1m4da2bwRp5PiwKXwD9DYUzmtFjtPqpGUWBpt",
  "key23": "5qAFdvEYT3TdwkKE4DmJ4migjjS5PZXYj3pWC917yhYbHiMUCZqyLmJ3CFn7QPykr7LUd7gx6753XLQfGgYZSEW3",
  "key24": "3GrT13Dqxug27xT6EEHgxgYg4auNVPijTt23XR1T59Pzsp8oJTKcAe8o6pt9bfpEqLApami3gASFq6UWGr1eBmPY"
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
