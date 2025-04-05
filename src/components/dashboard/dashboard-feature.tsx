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
    "5XXnDFQVzgeme3CkRSHVknr7U7QmQUtLc9crvGXZqiYUEkBrdCSXN9fadAVwWodcdK4XuYunJU1Zw6EacrsVEgcr"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2VCNP24jvXgWvGQm3dLXKNWQqH8jLf4Bk3fqia1SFLXNCQwg8vaW8kdbYFUeeoLDXADe6NU3vtvnMoW26woewdTk",
  "key1": "3gMGqw2Au8UzYZzkJgVMLccThKgayMui8eiwLA9Pj8cidkyYm7or85TEgKbHciY9WNZnJPedaTzegH5Yz1CVdaUT",
  "key2": "3qkxtdXxR3e1Uq2k8pycUPMVjwzewVZa8hZZanrQJMCYzKz6KFbw1eK6SgmhY7ASRBU56uC5cYPGSuRbz3dTvWsP",
  "key3": "4dcvGfU1pVij3SnuzpiT35cpHftThMTk1SH9XeB2ByLuUbbzMGfAAAZMJAJuNZXntJRvUEZdDwXVQWhPVwzKDCSK",
  "key4": "2HJnJwXHLgXAvwrzQiBUNtwGXq81zuGgaPahpTfCGTUxFcdTAhLe32tpAhRpYaR4Wofc8nwErNynSoACqanEdocx",
  "key5": "4FQBwcFn62hEH26UAUorUXM8mvN7oq1TuMrX7uLkXb8PidibmX3x33nSV2KBhhKorqCDQcucsRhGUStJcGAoMRb7",
  "key6": "TmLKYSjn1LMwcWRALR8ozcNxj23WYd6KYtvxbHiEUAaGc4waD9bzd5ikPgovuU1WiDpfbMQCiuKtWReDc6Yyj4R",
  "key7": "4w4UxFnDDFfa8Jq6Co3tdfHeVrtuPL5LggEzDmMYBfJ3q3kcmnLykubvthme7FsDXBLd99cALove9kXByaQf88nC",
  "key8": "2tdubzvtcZGsRgHbmhcpQr3thDDZAkFPLyW6FDbQXDJ5RnAnPSWUM2QB3YfHCXHX1TS5nc2R2n6m249zRnGPN8qp",
  "key9": "4BNbEGnrJ2cnwMNVvmxpfgJ8SXECRQj3Tu3qZxKgZgbk4KMUn6E1URp4kvxVTMdsa57rVzt3YvdhBCGbnxKzw8TW",
  "key10": "5FLsDxA9ZB62JpAqVLBNCrY8zQPGyosPHR9JxtQv5ggUmc8FgouQLWJAU719gTEpcPzE1DGhyukiVV1TBhS9PVkn",
  "key11": "4Lb8aCM52ipaKNn7nCkreo5NMovZzL6nwVHkkWcBw6mi1wP2VCKbRaeMrYK9qiT88aSH1AuUv5oXvktByTrEwcGw",
  "key12": "49MZ8bk3p6Newcnuwpt5d3ysnMcXnyeBKAkeV3u3tqrWGKpzXYpUwrkBpA9JGXXhZx1vPi2QWnpSW8gv8z1b9fK7",
  "key13": "5hzQ6ySZ1khCWf1q4DxcU5HPk47J4HUYJHzHyPr929qDNHkXnPXJGCAknJxQgFhWkbq4ABCYGzAJNwMnVZS42TDA",
  "key14": "2TGswAPkuToQ3n235kKrUF8FrGuj8ajdSngUQjGe8MFjxP1wG62fcJPsv6DuNbdZ6FKj8b3K1QgXo3JZRNyC8X7D",
  "key15": "233zphMpqfEuXgXs3azYUdDTFPMaJoQ6YXk8VzADznPw3Hbh4V3yXuc7CQqS6Jhtbpd1qCRCUbEarmsBXDJXioWt",
  "key16": "MS1diF8tkX8Joj55zdAuLu623DsSoksofcd65b4LF6CThuBW4kd11N75rL2vv4cYfPVVJ7kPhsmXqUUP1mRcQks",
  "key17": "46ZF9YtmfeVVpmugfg5bz6sNu2QneybCpyMgDBYgfVbVNGXYGjdDrYA8mHinEVFG7cwqMEFg8i7AkVYJztSc6Uzd",
  "key18": "5GYx5kqZXrf7Kr15ntp35jws61BdZi132s5g3KBzAQcpqq3cDDa8zeT4Z8x67NbA7UzqwAQZrHUj7ooepbiBtQ6f",
  "key19": "3tmthfyZQ2KQfphSEtc51dian9K9nDPD8q8PhCVjXzpJ6iiqtb5wabdDVTWcvA7ZE7h6yppDTU5CTVBXyWDvnVTy",
  "key20": "41tbNkqRU8JrLZdgNb178wxw5ZKxg68uFVBCq6kvbU8TrEkPtKwLX2jqKb9GydJR4ZiJC5hzEny1nSGqwNzqXpHf",
  "key21": "2RqXf7XEzh9MmtaaMfUNZ6BPXDG9S9RnavSeNe49PDJ72n33Un8BWYkoH72tB25mSeqZP5T9jFsTMRzjMzQ1TpDM",
  "key22": "5a1yAAvhiTvcQhSZ2zZKAgEh4eHKZgCszTtookUSjfxxdQ6SGvCM1KcjdgK33xTupiQ7XZLk2Ly6VjM8Ak22zV5K",
  "key23": "3ytKnGJoLZ8sE3U4efzFpSwsB4v8JxKjCS5gfnG1D6p97SwdDvGdUanWNq3GrpFEy1LeHXy8YJPP8g8J7YAridJx",
  "key24": "4JLL18RDL2DGfqbVsfQpVxWC7X1XYgRsyRT8AVJ1tnGANP7FhTZR7foSCgBvczGvSRYjE48ZxnvfD7hZ1RPhZWCL",
  "key25": "56vrXB61ARo4RxFEiUHUG1uhYwwVaCNQrvjkv24A7yAHGCF95Zf2yZvRfV5N6r7mYFyniUqaGYsYWptFaR7uZQzn",
  "key26": "54NfokK2o5hBA54KqJBGpqLp1xhPrPuUiQMdMMeAtfMboZAGwYpNT9CLKhA9MHBq5EvfX9iEHyHi4Qhf6j7mV582",
  "key27": "4cj8Dn5L4tVNoLHh6H64Un89Zokbr1DS5EJtLCZ7HZjjTLjthBkiSzCMNouU7CedrPByA93iYM2A3o1iPbjXdoMB",
  "key28": "3VetZhvuyVLDpd1uqrSfbupMjg2DoAzzrGxqZzLVHgqVKctKisJz19Xh9zzYVFNkYjFGRNTiPqa3ic9aqYv9xCNv",
  "key29": "3gPU98o84EeAe3tv5A6TLUV8FmNV1o4VG3KPVJY8s7DTKCnUdFHEi1RTZCzwnGUUsKQg1Zjfk9zBShBsgYPyb5D3",
  "key30": "4Kt6HjESBbprmkv99rKwnirEEatVSBCLbkoaLgSaLNvsUe8YHx3TmZ3vFW6RGBhbuJTNZv2YRLNqLjqsECn7HVcp",
  "key31": "5nuMncWDCb2yTrnrmUNFnVxH83keLGx9e7UTZxMLLnRf5nRGX8oUB5cqQNM29EPMQsF5JXFFadtt54pU11UQ31Fk"
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
