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
    "482QKZqQmR5xWM6amvT94dZM8LPdnLWWor4iftfZGjQrRuMr9B6ZqP3bW1r46FmddF45miu3CchxC37517me6pRD"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "51zGNLs6jF2CXZBccBkbkUbTLKdLwL7y9MZFbBreVTAYwNC4qBS53CeTP8tDwXVYQecjPmJhcFj67Uzz7uLTag2E",
  "key1": "5CX5LtWXNTLzQjujiGFe3LnwCUsRCPBNMraVQpzqTToGmkbDgg8s3wMW9qZhoRe8mvEUgEbaJxoyxZDH2TnFmFdw",
  "key2": "4WGMiAJL7uurgBS3MdHCxCukixNtvMw425Pp3RPAwdetaoJKf65wda5CaVhaXQE6Q7zdagwvboHKtGkiTcsQT1jR",
  "key3": "38K2goTV4mYE6HL3Ysfeai31YiWEC6C9RwQmWAZPpp1dMqDC3uXwRZPEahAmgstVtbNVoXT5U6f4GNaT1J3mNgeu",
  "key4": "4YTZTfu9qP6aZwKDfj6DmEQozSXPge6sjDN3wSCdPdx1u7aDWSFDD2kcXMQAZRQ3LJWKzvTB6cZGDHEEcvs42qw5",
  "key5": "66HtKMhEjRxSSi9ZK6nDZy3CC74nKr5qZRjyJaFUN92FaQ3gjCMsZWZ6m6VKcyEwNzw7nCBa2ZfiHBNuD135rvYw",
  "key6": "5fpQCdJ7BCNFVuSRCBocDoxe8zBaMPW546WmRxSqk68vyRY4KDDYPui9fm8EuN2oP27TMrDziqneUf1N7TiKdsZ5",
  "key7": "2i3XQVnbFm5XdX47E5wLJCaPBFUqPx1Cj41G1sDRKe2Gxs5oBbeBUH19wACgfYc7vuTKD3wbP96E6KU9qHc4JyQU",
  "key8": "5kwqhmHsaqbMiiQEdxxuGPHsNNfojvRUqiZfCWKkU18BuenMKuS1F9RTB4JQe89yw3U29NMvxkqCvPxcXsjUmsAo",
  "key9": "1ZPJ5HaqHwAXuVvwDMjEH2131yxBfihUf5nVaYsocx9N5ezsESYvsawcjDUNiwKo9yHQFq7kCvB5x7ZyAABcRYb",
  "key10": "3jpSnGuBQydt6oRR5yUiwVA171QwsF8wE85upNptTfePp9WCb7VPupNoAWW7Fjhgc1Poc7pAcBzgX5VSRDgUhWHq",
  "key11": "qTY6KgV9qmPCNNeBjxGjKm5XPqBMRr2WGPZHvJr9CDkSNP8ehYuw79g7bSDDADX3kiJuHnKxMXg8u91RioALfE2",
  "key12": "5919rjP8eBer9VyBbscMnXmBVPdgWgtH2KLisYdDYmBB2rSjG4nJ6ek1i6DMFYCHdQMKoBEQSK5m7g8EDg3HUej4",
  "key13": "jZZP23vha8whJDoWUEHxK8BuovBjFcTNHcJSCamCMVKwJreGryqjiJ8fpoYFnpUBGBvnUFNZ7SmHpFZAbF617Sx",
  "key14": "3eYu7c7GMGVkCuhyvofLuCNJmU5vnZ4p62xzm3ArwewDfhU6AQ6kbiXJwgk6ksWRkvBuDTem81EDUEzd5SSwHNtc",
  "key15": "R4wavvry8YSL4L71x54NQMmXNB6XU8DyUAwEQmm9bCyawkjiiRj93Rja8yhj9G7ft2bjSjigTZU2Hci8sWNsCkF",
  "key16": "3Bj8iHPqqoVHNTnMVqHJjVukqegR2EaT4LH8xezcLKshnxaYrunCL3v5UxQJME1yo8nrrmVVS8xLGRpmVyEATPN",
  "key17": "2jTUTfuHVQrTsi61LTpcbiTMj7z2EdBb1eGfDyX51QZPNMj7qxwMM2HaPXVZura6ogaJs3KXeSUTjVtVCgNPtDmq",
  "key18": "xPX7qsZqCF9HV4aepkpxmRv1njaeDK8fMgNfnouCKiV56fB23JhueN6ncmwyqFw8d3u2dmG6XcUxK1w3HS9kCdn",
  "key19": "61uVcdjDCuMttxbc19EryzzA7ERc16Wmjcc4p76E9xnrizuUpKfah7qJSeWoScwDZK4fTs14QEQ8J1ZaYz14DVrR",
  "key20": "5TdepgJtXdWDLF3Z75zFqgp7W1CYmFDdJ68HeZrnZqm33BqKLL2fMya197bpEv5U951R2wyhyoYUgjQYqP7skD9r",
  "key21": "3t1uKJQiUwVmfo2bSKA8fQeWa92rorYNzh5MeRJMa89ob9yYJrT13HPJEyxo1q1hfh6toKgAuzU1SzynBBaY68Bi",
  "key22": "doN4X9a23ViCyy6Wmfg4DZ1CHFHAkTmHNz8heNQfLxQT4PXLWRQD6EXAtw5TJGK9n6VHFKr7R7Mp8cs8LQ9YvUc",
  "key23": "45tBzJbzCAnDZV6T6FDJih1Z2LZ1MgrA928MZ8Cs6nqVc2L5SF41cmbLP36kj17mVf2V8nKUTG2hbUgFAkYDTM2k",
  "key24": "32TFT3vpFT5tKXMiS5mCt3vN6fcC7oA1MDUf2iYatAVPnmb961kbNzrGvfRBkFdddLvSSs15qUmRVLWsbG6dvfrS",
  "key25": "2X2jtrUmHodNtHx7ExsSfgzJ67HHMrJok6hfxZ9r1Y6juSXeQ4qWJ5coexnJ4kEoeqt6EAZw5VNtaMeoJowmfA6D",
  "key26": "3r4vKhNthNAhsgCzsR64MhU7HCV7J6Q2gs6QXEQtHJ4YVgwo1NRAPZEyq98H7Fn5NWitn8jq9M8s4hZoNLynst43",
  "key27": "2VRSw4cHzfifexAjndHGPbcDF3zZVp2vwPkEv3PufEyHWaw7UgZyYsvJ95wmfERkg3QUX8jN51eKNRMjFcywDMmZ",
  "key28": "5Ui5YEL8Cp82JRvFJxA3kWnLtYuNQsiMsue6bC8PWKAFUrRoxXBVoYqfua9LK3wnStnRtkVckKxy6FkGa8AnFtBA",
  "key29": "3yDVGzdZtp9KNcpwWxCpzSH6EZq173dXRqatTWS1WhftqPD2kD2GX1ju1cutYUZeRpDTMTDE9M3nMVPHp3oPyo7w",
  "key30": "2vF9ZExAP4owpcz5dVtBfQqJbGdyZv58gSP8nLBHPBnbGwndqEbN7SCQ9YeST4i2ryDBYdEEuVaWPf4XnicbrKc6",
  "key31": "4i9DVeTu6LHMwEt7TcAB5PSuFcPqdVW4LbcJRbyabPnJg39JETE3eXsvtFxxwyjjmD6CyhKJ685jHBynGBjDHPEP",
  "key32": "3tz81FbUTQ22ML5n2EZv6z43nnVVGBw7omypWP8L1ZFUEagiBCCSkx45uknkbhAP6CyEHcH4SxQ5Pso8x5JP9iM7",
  "key33": "3SgqBN4xMfVNRqUVrEcXHFP95PxH2uFsHUDQ9rCTALEtxG56L7XszeeHsAK7jXoVpETs6CWHinhqRxJgouZHS4Tu",
  "key34": "4iYvb3aHFvrQLq9aQJCuBVchbsPKgRrQzooaK8R4iTZnpLHnaqjwQVESTHiNmCyz5PX9P7XZGpAe6zq1oY7ntdWp",
  "key35": "2kN17MWGXFQEx8iaHhD7UoY3pkNuQGp3Z6WYY8kKAXWm6S1qYMLbtUd333LwB6wFqiEeHydZZiyLjoxDqDVsVLsm",
  "key36": "64ujQNzUtYh7M4F94vGUkMV3Zs6ciyymaoGgo3muhG9T6QEYDuDJbrcM1hVivY8yx1cr2LkNXRsyWLnu9etzYepf",
  "key37": "ZNFRhMCSPt9gSi9KVof71ZTzLuUDq1q5QaFaxUpgrGv4vCGeSabXVbvfVZQvU6gfqYrenwYqzP872moyWsHBX9j",
  "key38": "giqtuifBxUYpZJJxjgY4FVNYVzp3XXTpbJXubmLesZvUGBNgCViyAteAf24NCft9fCp3taboatCEJpiDTrUtTEy",
  "key39": "3rwRX5zu7s1dt6t8i4KKNgjj1jA1KikwgTRNrHtxNyFcfDT6M2qfo4mjfmFxFS3nuj8pQGKmrjEnmrTL4K73GwmT"
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
