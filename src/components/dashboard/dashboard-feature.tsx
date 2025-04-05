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
    "2cvvqmBZGDdWfjaS4ddQpa9kwiCKhs7ZQQ3fg4E1UHwNAkciNHXHaeCQhJhK6rGq2vL3iJ4iHeqEuFNRomjmCP6M"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2ft6xYBbQ22Di93X9XEjAuFt7RQQiXD89LRbe69sAipPUK9JSnq457ahmU9TCTxVeuo1Tm1axwqE7PLPBvMroWnX",
  "key1": "f2vMcW8TBMUJK8HVikMv5hjqthMU8wStTaFA2tmswJPAaW9VjDpakEQTmTdgbwPqy1YExoVpdSrPWFgr93ZobvT",
  "key2": "3WQFUypJ361xQbCDyp1VRWDPJeUd8mswosNdNMMJrgzo6rtVKYZDUC14VmKE5i6v1SsbSvbFfF599RvvGqnBv4MH",
  "key3": "3hvsimAufZDzfRYXcUVbG11Hzzxua9eCcqAbRpsyDB2TfgHWTF3qZiCZSxaEtPU1XeiEgpShAvqcUKgpX7DkeRTF",
  "key4": "qvWaSvwCJ8FcqgTo5GntddLDMXnKGJ3pfrKdFwcSBbx2S2GbbTRmfL4YZzPMUfCc5NVr7h5sHqQofMkM6zh8heY",
  "key5": "64wvxW1g15YsN7jqZXzTesoxxayU5oHHT1VAfUFKc4EyFU5G5EPfAaPv5YAjgCh93xxT6VDio2KzCrQ4EnANZQFG",
  "key6": "1K7AbLtBD5eboHMxHDTXfWfgVVyJSrtxtmzTQw8B1Tc7XCMyUHnY299RYsyUHpkpSBx2xnJWRPK6uP4TJxXx5FJ",
  "key7": "2jLKN8d7JQdv6FmmKEBCQ3rgL6nJrEEPvGsZ8xEq9HPx9VVaTUXytvphSFSFcg7ipDTo1a28X4Mom31VgRcA8QjE",
  "key8": "5LnJJ1imL7jNFLddYa2VVrVbYcZ1CoyVmPmxnRUHKYsfAqAZgX9tP1gqtfeLGdqyvkA8qUQdYYxmkbTAW4VmvjRH",
  "key9": "58yxZY55RgkhSFd6Gpa25hsEsFdbGEvaUmxF2PGg6R3ZP8N7NqfnLDxYLVwmZP23JfncNsfP95r7UTJJoF9B4DKg",
  "key10": "4AF5gkHVwRj8zSgNRkkt9x6bYTmRvynASWszN7QsaSir2CH2ak1BpLDkwhQLrR1bx4RWMZub15T5bEQ4h146KdbA",
  "key11": "2xjADky9j24e1YbaBs6aAWhsbSHbB55MbV3ejkttY4Eayx7vSYT8YuW9QsT4bZTL3GWj3sx91o7hpdzpGNqHYbCc",
  "key12": "3QrP9Cy45Xj2UpbkEvmW8vM8ckJRRZ53G91NQx9JF53Dw3zaEoA9WCjmdssfh3keLwNmvESuu6agSdGzV31eMwEg",
  "key13": "2TMuLLGp923kytJhkNEQ3MaByTbPLGnHzs5tpSsPJJzQX6v4x5wUoZPM8WcaY4NzaJujKe2LYMTSo3ZQr66n2f58",
  "key14": "5VRHnv5uw6ujs2FDdkYkBWiFDYXiAmo8Z4PgtTzn3MyX5mAvcqXFjj9MnbHE8JyVGD2mrZkp36422WFtHgE3MiFw",
  "key15": "2i38TYwM9Y3XLJPRHXFuj2GRZVwr6B9riuUh95Kt1qevEWdxSDZEZV2Ag9ay3t7Dg8bF8NUvaExQKg6EbJsr8yry",
  "key16": "3ExUbGwnzGSAzHNXqy5ajeLeQoqJGiKDS963L5dpQg12jeoAE7dAio2hur1kqsoqgJiGG9nCMc5F33Ymnct2oRQ9",
  "key17": "64pHj5hnwvePyNJqWJbPQoq2MtkNJqbxgnGKojYfFakqqWKKnhs3Pny4CthwzCmkykTt3jwnBtWB38FJnAkEJJs5",
  "key18": "2GV24Eo9JEgJ6FLAAheLcMz8NjLuuyc8BaaCFg7osfhvWTtEHRugTYkWC89X9eJ2zEG283YBZ2rnAc5JXXfzGfaB",
  "key19": "TLQx8SvytPNpDeBXi3rXS5TTwtrVgXGRHSW55fRG74gt6cn1rgvC72nj9UH8XEsaRAoTsAba5zYyYzMmwH6LEhb",
  "key20": "2kaJyMcTQeiGeaPTAZpJQwdtWdbuxjR6k6FKrhxotJ1V1628T8riyX9dnMu7cDoLYAu57dWgYMpqwD1Gtr9skALH",
  "key21": "3huzCWuQ6vi1qz7U2BqKrjACb7cix1rhSL5wkK9syNLcsfDgDr4wphGx4tR9kQqtmcBo8hAUNqMmNUAJZMKD791E",
  "key22": "2cEwYN9iefj2UkvmtnAcRVqwGfDowFkTceDWzx3gP9CDzj5edeYp1rQdkRTRCvdQjCpBWYQxDotNPoEfkHDZqWtZ",
  "key23": "36B8hrfqtnCjNthCr8g8zkuSTqn1KFA2Ux8WwrhaM3GZJQkFpoXwxyfWaxARVaHpqZMnjz18wBLqVQMYWHr9V1zn",
  "key24": "dxxjjWTZvRYG1DDBgSKy6DRfnTaAWyXKTr2ppKuGeJ4wNvmYBAERpWrJ2ACpBbCyUdafuqVVfQszXbCauvuZnxr",
  "key25": "xj5rscYBYn45bGKomHoidZETDgsQkTUepXvfTDG6kHczApbidj52YhGtehtfS2DtBt8t9CJhiRnVFWAozanSAuR",
  "key26": "j1WWSdTDoFqRrzkvZdSxoRmwubn8oVMjZNB1ZchJzosGJ4u8eVQt1crmvTFZwf4KZA8vqHgMgHahpej9P8kwe6u",
  "key27": "2hdyRNtqneEN5taopNw8f9fjgYeJ1CzNdwkZevDRK5bxYVuU46eKbCKDJftYz6ZbeAMJSmoo1ANf9i74gYVWhee7",
  "key28": "pynbVshPHZVVr5AbnYjfJ9XAdYZkw8kNp6Wv2zGvRmNDH4j21iaqemku3CsKQ94ZQrBxwapEFQczZBwX9VgZ4oP",
  "key29": "44YuNaDWE7xqp8hgnx6EiRzkSEgYiBPkhytjg6GU1PCz9vDhvfR4NDJe56T3a4wwEvtumnD8d991qB3EbEYQmFMM",
  "key30": "4CaygyGYfFVASXBkzGcyRsZfHPW9C11B4Z7mrQKBiJT624yKtYg6C9FvhDFioMdCUNS7Po2KmfsU6dZkMzSPEiKt"
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
