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
    "5iPS59x6k4C3E1UZD6tjpBC5sLUvHdviNMKXbWXnzTjW3AfjCdryUHgHcqdCd1tgBUGv9ZzUFwp51YTybRMY94fy"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3iGmUYBDwBPg9BJRwxJhQPx7bsszN7kZzhPcL1hG7eWrZuVR8RVcUeX8E7HWU7R3wtSRYNhqwsc7ahJRsreYS2GS",
  "key1": "svGPgiz5LmbASyGE469fk9MBJzbJRfrokiSVryMPZ2JRfRpCrTZfa31q6mn1m3oKtaRwX8RbFKWWufjeE8BS5Wi",
  "key2": "3DX3xE1DECFbMLB1Q6n6sUagrpbB6S8pxAoNCrnK9pbZAJo32tHmA1KxkQUfYuJA1jRwr6tDgs5ubUbgzJZ56WqW",
  "key3": "bDXQFsfuo4H85agJkCpeKYmZ5iohsEx1j3X2tRcN69DrseRdhazc6oehrV2nEaTwT1i63ceryqEenH1Mmh3Evvx",
  "key4": "wfqqHYG9K3aXyupbos2jbymQTGSjvPhyK34C1jKMB41U4i7f26Z5pNDv7Vu1yW2NXSVrU3HMCX35gKijD3g6PMA",
  "key5": "4FSeHCZXwbkngXvXAXHJJ9BQQ1UkYFmy59xJ3hmjxHhUq592nYRdQ1HWEEbNnMYdFwqSsqLiNKigyGB9Sm92Cemx",
  "key6": "3tJLuxP9K2xcwt22CjV61m7fjAuZuxzxH7mPKDS7LweDvgy4ZCva8CovLDg4FmCajjcMj71rE75swXqVdPKJdv6P",
  "key7": "vbXUhqLmVFqsuuqG54JK2caxiBGLRDG3drkhkrTDND3P7qj7ChrNPBvMXSFMApQbKge4ATqvHqfMWyPrPwPz7Kv",
  "key8": "GUzE6rUMDXhEgTbYgX9drWKG2MAZUmqaNizsqphDUEnRKGdCpKC8axnmi31VZLniMf3yn2ZPmQCGVVmEho2Tmz5",
  "key9": "46Kb8heVwhhsmEDDbwg29C7urnG2Bz7222v4MZzk7M87o3xvikUN2aRkDT56UGKbqqfg1DRpz7UP7zz7hZYHXnAu",
  "key10": "5eq4kkBVtuw4CjNdGySpQNwA5HNzL5Ya5FiKH78dnnfTMpTx1W1ZDFByS3gnrPc8DsJomYeQasJhff6KB93gXC4f",
  "key11": "29gqZurQNw6WsuCqs4y8mwy72Nqzmo8pVKBjJauqKm3NgPLSkpTSk7ABZpzvxQLFUXj3pNB29TyGy9kLr45K1DcU",
  "key12": "5bGzX35Rwx9eqsTsqHbDNM9wwL1uMKbKzPMWvTZR6gB2qEP9XXYYjNxaFv8eDuGhXfA4HpADFBx1LVtrwvUhGEfW",
  "key13": "3hwNpHjQno6JTCZZMQi8uWekbV285YpSLnxB6TJDiFaihU2SckbiNBqSpVodFFH8s6m4K4yeJfJn4fivoRwaDJzY",
  "key14": "4iS1JYAWSXxYXkambRC3bvoktuUHAVqNCrGoHLemYdSKvmPEXVc9Vku7JmPaRdXSxhoQLCEJAkWpVyugXGc7a4zj",
  "key15": "saKYoB1mX5F78KNNjrWDJHPNQkjEUGM6N4S7ygXo3YD8283SbhZqZNvVAvgRbtD6cZW1159LJgxeX8ySehegYxG",
  "key16": "48fkFfNSLpH6uYotgiXzH8kfq24ZDTHpk7LrGnZZ9cEsyB9ZdFXcLgkLE9zxm5hS8v6TnNAQAgEwdyKQ39yRrwPs",
  "key17": "U6ycB4SwjRDnhqZz9XLc38n8LJiLmmYuS8V9mchXSnW4VCmpaBxrf852ot3Hosz9U9s7wcdXLskTwKhbLoJJzbf",
  "key18": "63fVmuTmMCt7o3Nqr2CZ4cCvchKuD3gS1FJLTEUPfURL6QKWRERNYRBChYCoU7NR3XgYMFtP1tjohS68JeBaFDBr",
  "key19": "Esn97FNMRoDUPwkmavJma4FynJDa2iAAqLKre8xsCApJe51VkDcoMEeRQXGK2YPFQ9BoVcrAKsfH1CzRxmCefmV",
  "key20": "5Cg4UD1vje4ezGFhW6JfEpyHUWixioanp61URot3fbwPHxErvkvNFHmWH4QfwiCXoR5vGBV3jPohzzXfLgEUvgrS",
  "key21": "TpPw18a56yrrdYe7M2MbXtRNc5SZGHFFjRWikg3bPK47e1RHpm5oMfUGKQA3LS4e93k95LLDFeVowJ9YW6Po6fM",
  "key22": "5EiY3qt3qeqcD7EXudSv51LLxD26iPyQ2x7zdi7nvz6dCwJ7LRbp9o36P2UfYDNcXW7JzdFSQ55wPuPVVDAFf5qf",
  "key23": "2TgYSvneTSBf2cCUw5bhzC8vn7wprnRzhGpWvmETUF5msbxvAYBjqdXqGnBXfPQwzKmmxu7aFwB2FHsBGjx5e8JN",
  "key24": "2XJFK467xkkSrAGQywpcivsSH43g1oHZJTsfw7n1wyJZZya4Ji3qTFJhZczFyswMTfdB9oYujLNRG9oHWEgHEMQy",
  "key25": "VaGCdbpoA4tEjs2V43qfUF9RZeHYpPZYYzyut8vAZc8D6UhK3oKGmdxdoXbmGzemmWmCK6icXuG8T6dpFt1MqmP",
  "key26": "3Lr7JoPKFD65L9ibqumMrf94451JGZgaXUFfjeqUo7SQFEH7NXdnkB5BspCey5WpoFHCpDE9nug2DaRZUyc5h5XQ",
  "key27": "5VrE5tWXDu4iqaKuu1ZgCiKQ9n6HMBVYZduvGg1W7xrUjwHSoy9ZJDJaxz575MVRQ2wMkLHVkzFCPn1g53JYB6rp",
  "key28": "2j975YtqkqGb7rVT1HEJpitYXd3DTHYHKm3ctuZRCfQvW8YyMu7mT1KYjpWKtWzfSt56ko52xdqh9f7KtXbyhAkq",
  "key29": "4JgnNCQ8xd3f6K1hxsjzKBNS5AaajV1iJrNs8WkvHAEDqyA2uMBGooqWdBWtDTrcSvCYyc28i7j3S23i3LvpRr5C",
  "key30": "64Ljo1dp8AbddmyCnu8s5ZHJgWTGWgRqsNrFhYSFkpcG2X6DCPeoV3ALBCreQWLjxZD8b7f81ZYSgE2jwR55cWet",
  "key31": "3QvqxyKHe59mzLAHfUn1bnAFUdRfE8Dvk48QdCHpo5CsqxWZ3KRSheKNMdxnpGy1zjt4H5NvdkaWhbN6PW98CyP3",
  "key32": "kzvFAXeMqUjuWMrBuBJ5BfhkGWT8kSKNkDrzt8Fkn4EDuHa2s7wTUcAp8SVtu34G1JGkmJuCfm8MvC5Xt8tNK3N",
  "key33": "3WKNaup1rkgznuNdvgCNxhBzxaEqRkzPUSXa4mnRvahZn7ULKUPnyEMEr7hqNXvnFMqHzwP9zq7K6MVduby1F3GD",
  "key34": "GP1dfFyrzy8LjUaKZTjRfa25R5kAhyzQh9viQFx2MQTPZsQPoLFKmZyXkhZmwW17MgcETd3dk2qqZvymyefsXaG",
  "key35": "tD64VhpFK12QxHukuN5SMvbJc3VTiRMSHbemzHHsEzLRLpG5fCfSgNHxHxGLNbADQ3sPttSAMH9kepvjydjiHej",
  "key36": "54eZQuoUSBp2ntnkJy2G7KCFExX7DwtRjEihUWTsRQ86rNpjB9ZatNbKYFdTKqVWu7vDWqs7KPFhr5t2zF4cnY3C",
  "key37": "bK9ebG3C8C63uFX23CczN86aRZwC3aUkPDh7ShNX7brsusHqLAY8xuUp2GnPX5nUSfcKbPNT7uy2aeL78bpzSPb",
  "key38": "4B3AWHt3cRFxNUYnWsF4Lwb1DsTyykBQUhtqEnRmKDjLLJ8zRBpbFKWzKBRsU7kATXihKHm9XigL4EYy6RTho75w",
  "key39": "3RoNdpWNoxn1pCUXbGHYAjjpXdFE7BT2x3bFNafoZTWCYnWJPARwZQhm8L4RUdQY6sAtT8d7yoUMCz1SMpKSD6Q4",
  "key40": "2WEoT6SYasMwXBzZerLARb6J54DyMdZCTRdW3umoowA7UFqJVqCPFxSLvdV2N6WsMvfwMwaKUTseVgHNQ1Jtpvdx",
  "key41": "4DEXgFDV8KpDSMhcPfkTNpQqR9kPnsQpJbidJR2s58dgoKPMyBM2QukxZc4EWQhteqF5epmS8uoHWUf8wb3NUJep",
  "key42": "4HBAr5dkvDFG1TqeiqueuvJD4guxkyGhVK3YAA35F3vBYDNsETLZMb2LtKTeRc1RdcADKcUvEwkysgu9NDQDeVWM",
  "key43": "44mubP2gATkDKQt5wUiopjwAzjEQgoK5tmJHcR7nQreCkgEAnroToNN5mtK6aM1Sg6hczvkgPG3aXZoi6jBQpgPg",
  "key44": "2JZ9M3ApN2aUDVCW4VH9ZLSjNoCpmXveWKBTGw5c9MLVrjKymiGoByUh8diF99CDJkRuYCEikQRwoJYSFWaD24YF",
  "key45": "4A4ck2KiLUN6kS5Q2Surdzr7Pjxb6rWBbhgoJDgq6Vahd2kF576CCFdYT17iC7gL1tQRTZuWqz2LWrCKUF9WJjht",
  "key46": "26vhpYLdR7BX3SLjsHhCvuNtzsBGTSgs2EYw4pKrweRxp3JQV5ZRa8kK9vmSrvx5oHxmVE5EZ62X5UxCiaxeNqoR",
  "key47": "3DJ3AyLnyHrhDNpTaXYKL772tMrsrudxvpCNF28mGCZLnirs6uWTAQkJWpbjbpECm7bDgNazAoFoaxvTZUUUM1W4",
  "key48": "b2b41L98rZwSugMkNtrcJ4nAxBKypTv8frgQSDK5G84B3M79JK1urTwT8YMyuQJivVKjuTurrvgWUwZWjCxQB8P"
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
