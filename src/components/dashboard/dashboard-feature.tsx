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
    "5yNXav9UHuyp8yagwEr7txRkqkmFKZ9vkeWYa8YmhcPyHFPeoxzqDfQ73LqKUdyviQNnFXVcpGRcxc9Xv3p3LraN"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2o4vMkic1C6eBBdJVNFmtRXngZuo9sbfetu9HJZmfNacf4cLA968ozmcWWbmU3nBbVX6wxgSTfume1skoaq1JD8P",
  "key1": "4mUGaJqfFioEqdwkyuJaiEve8tpkZijN1tH6zeNb7LxLQRbDbrZiUXqnGs8naMn38LHzJJet3vHgaUMWvZofJsGc",
  "key2": "3qDUtGR7jMUkj71fbJi1pyYJRPUZSt8uauKmwcDXoNhwCokobUXqszQnErqaci9kFCH1hSLbnFocXybXzcdb2wrB",
  "key3": "57ocegguGdSq9AZY4TPAdDcHPyqESdxNuW96LyjBGoYfViryogdfzGRGsd6pwCu5XgUM9ZiviRFUEggCJkHAq94X",
  "key4": "5E339XDeiX2BkBvchxRRtRGw6W6zGnECiK6KPRKkWq8uEuaRCHaKFEiknwmfCmfESZuAGiYQSLN6iqhyLZNgq5yE",
  "key5": "5KzfhfYi16Ezak45QL4TJBJhQ5fYE4QhgcJ2oqHoHEZCyd9VhkrhggQnJ4k3XsG5YnBM6hgEGY3D7R1uHgTsH6s5",
  "key6": "3Wqx3t8kN2R77PD7tjgicbvLR857LjRzhMJEkVs216CFZz3jqbgThCDU5ZuAutStmfPH6Q6Aa1j8pteM7AvUd7Cb",
  "key7": "4BCo4dQeDLN4QHmKXmsyfM1gt1Zwf5bBP9CGPbdk5fdmRtHoNvokKnWAc7Pys69zUGUa9hED1Y8hFkSsH7TcDgRZ",
  "key8": "5bqj9a5Wj4DxwUBD4PdrqXYQgJjB6jL5hEbjEM8eZ5oFVGNDjDHfze8PoixAhHmxiqiiRu136hWgnExNsqV1Lxi5",
  "key9": "44oVtYBs41bw499nPcxkVuTW1pwrFtgGa1kdxswZWkJrr7sNGVT1zgBfyqzhXZMTivdi1skEe7h9VWyc9o6eQdqp",
  "key10": "4iz3VMa1Gz7uKDLk1yHefipHVXgg9GEAFxxze64B7JZBdUZ6YZgVJbBqtHYtf3wHvKi4RTLNPweuT3fMYqgnCnES",
  "key11": "3ppGafWBjh4akXqF9Rro2i5DS2TFejczcSbw6UhYwBpuytY3z3NevWcbma6r7xnsDxAGcm562nng1G98ZBXcNP5j",
  "key12": "bBy4WjuRrpyxW1VhL9xAQbGeCeYXAArfeM1BkToBebsT36tVyCyzUm5VCm1NCorDJmWg4q9ucrVM8oY8gf2y9Se",
  "key13": "5k18QAHNG1Cr3vHXLWhDdwURLTiGgG8v3YzRvtdjGA1XKTUMDmXMzcaGMYUiLesQVu2sc2BYRx1c1Fr8UjnDse49",
  "key14": "5eveZDsXS4gzFf2N8eJQ1V3eUnEy3ivmsWTboa6ZGVqwvfBD4oaQqr6THVzsxNguDCyUrQ4YHXxwL58LBgZzUsua",
  "key15": "MXeZxvfMFCJAK78wfbo7WQnjV4dMH6sMzDmdaVHR6dZEJgXSfy32VQqAtn5XaQp3w9vGAPMXBxbMEZbvtSN9wLm",
  "key16": "2etCoWVp5sTvqmDVWNSqVCUNUhcLJpr2GVLouE6mdp8SufJH5dnMPNUGS1K7bZhXsCBx67BzpgEkaTS1gxdcoci7",
  "key17": "544xVr4YJ28sDg6kqrgYudfBNEfUYDwQy7VisLToQaA9MGNgVPksNx7FKhZ5SHDXV1F97X9N6d4SWmQEFbhorkdr",
  "key18": "3BSmLL2AFkGzogirHeCHvHoiENuRmHmv1gMLAbqxmrjLA1qXYAL9D7S2cvKAfrFJmstRmZ7YZpQnEEtuLoHnfHaa",
  "key19": "2xyRp8Vq5RyCXsYkj1Pb4HRfHEF1wbwdmCEKcEnUceDiDpoNqbmT5EVokjRgAwsfLAroHiQnYweH338zEm9hdEf3",
  "key20": "38gQ7korPu3wbi878HTmwVXhgRxAYPkhVHC8QHSW6woH7HFo51C1ZSuk5SCBK8ML4UpTPv5oLn8h9UNv6EkqVN2k",
  "key21": "Qbu6Btk5nVGGf6LCxJ4ADf6zo8tpJNQjL9YmU2gqbC67VcEZcVARGH6A5DA2XHfLDEz8mbmHMzYSDHwQRTRTQ1m",
  "key22": "HuMtu2XMRxwYLoUf2ycmexWe4W1vRMbnKwJArd5Q1MP3917m7t8mruTLPe2p1FbYmL3h7Eh5xdGfgdbHNR5ynyQ",
  "key23": "2wqgvteUeqAukk87CGyWsvUXQH4RNYUMUgwS2jwe7TcE5i7zxVPWNcfvhniiY6dHsEaKKEq3rn6wxZSm4Vrh5rAX",
  "key24": "5U3U8GS8jxDdEU8Y29UDQzLW7HYarUzWhKVoYdAtvKFPBYXYD6ASU5pSs4uktuxWnoiuWZgEtHYo49GCTvXC4i7w",
  "key25": "3vafyr3XEtxwo73N8PerTjfw3D1z3UB7LXY8wEaAwW5jj78D9ecCyk6GzatVuRL5NesRS2JHmKQGfybdSqCV8L7b",
  "key26": "3dZ7xQwtChq19xKaA5TyeYtZtJ8mr46ujF9LAtj2zb9L6XCp2bgKe1NBsbkDahSCTFGiofcYpLpMnD4GFdFy5LU1"
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
