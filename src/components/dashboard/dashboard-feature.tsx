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
    "5Ha7mz8aywo1zvhNzFgKjpTLv8DvE6kAUdG8RwPPt8CBGHLBYYQwEtCC5EgzY4cvLUPGBZaEJfniKYhNxyVfwb5d"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4tcR47QtebwAqxKtxSR7fVfiFtQP2867rJdgBVYzz5F8Mi89gd6LqeZ6dudmihpTdC56seJt71gaXPK2tWUNYm7A",
  "key1": "3qdBgwpU63tzdEGyKvVbqssu4nQMhEvRFqy38NWP9uMhB5CwURRW8tQKQjqu25ZtUs6JeXNYR1WqcUdkWjt2jEJ1",
  "key2": "4fDcRDFBjPu6h9XJ83oQDGaGuHfT6tdXbupCfpsWiwh3B4rt4YjVn5jVrM962ZkP3n1fZi1AD2tqhoTqnoSk2eZT",
  "key3": "2KJg1xGs1vzmtj4Hv2TD6Hvcwz2X7AWDrHChsdJSYeSQPHH91y16HHTac1XWbMacC2SM1ugSDuD745ZzMJzsEyzP",
  "key4": "KW5nSz3iAZbTRdPFpVRHBTM5psfQmgyQkXZYDeF2CGBeZX8N5xUUffg2SMv57KTTfWtfso9PjiyXAL3jK8nfLq5",
  "key5": "2XGTE3Ha2ddkYbqpxd8rEkBtcdgMPymT5DCSRkW8kQWCv4quWQu2hY8Kw2UYkTKxfkMqDPRw8iBrdCgSiTkt7USL",
  "key6": "2dPCpuuWF4kVPvkeKsH6TL3hKwuuTxxmSAMGJmK9Hnaapdn6JuFbTaRPTFrRqyPgzEnBJVPKs4u3k9i9VbKoxKn9",
  "key7": "3qMm89ADoyFSTGECv8jgKSVwU3aQZigHoo6R3kpXmGAsz8ZaYgvj1zjkjHNkfy787NiS4sFJmnHhxEm6TddxKzCR",
  "key8": "351G4K33qSfV7zAARQBoWG7EgQyQDFUz3AQUpmoLGTXwoi64YhsgTZybLBQG17ffhPxaATwLy5oTMURXbYe5HiMb",
  "key9": "3aC7q2QdeY7NYRwJa3S6rcSMqYVkyqwn9eGdQWTzReAM385MrXD849RdedjFNAVcBWVrcfDGZ86TKQXUSNmTyfpx",
  "key10": "RNfXUrmtseeGAFk5qnvrRKr2XztUFg1xfXBHEDrmdVhQ11CYCsSbc9J8dekX1sJAMMSDCuKFPsWVALkkWriTFik",
  "key11": "54BDdTqfkZti1hgHavTMTkoro65jZptaxEUVTcktWw8hCZ57jPkV2G3YhLnXxVz4x8mBKehhCkpqw7TKKangR9Qo",
  "key12": "5kyF5sygqi9r6BnrDaBvpEVbzUJwBtxTUJsDvVDgTKJyxjBVru5dJ95fKSzC3bVWNtBZ32V76WaMFzeFCSvo9Eis",
  "key13": "2UdjkVR5KUrAA6evQbKL82AYCyo7aguCMwzkF6HzX9rsWcy4jSDajBg71LRQ2Kso2YuWzXSJXvfP8L2hzzLSYAGw",
  "key14": "46HsAwXtRXfJACZtoTdmGVh8i8Gx3GuczLEav24kFrJQymmSXFuEAQ9vzXPnrbdsBne9eLqst5dx5ynZkLNRMnGU",
  "key15": "2UKmKtqswThgzieLtVQnifsp7YVhS1UVApvxbGWMd1P78mmzBHrJcDpubVFZ51ZFgVF51qopDgtiHQbF9TqxyMEF",
  "key16": "51sSdSRA5dgGmBYEiiiK4TXbEEfpikF2iqRfQVx5S7ZM4TCzRwQ8pmVo6T6GDUSvLo66QAQFWPuQCttcCHrgmzc4",
  "key17": "5gHc8xuCDvkrtL1WNKe7dSnvUcMZt3FSzHiP9B2QhNgzV5Y21jRdQXKBJwEBESxByt4qpkqKsmtErQ758EJv6oqh",
  "key18": "2EcCmyfR4A4nfqrrgUn2JQRXbcscqNBjrJZE7JRrEnQVrox7vbtiXGMiuTzFqia4P5rQafBgvejJFgMWMZP2Wu7Y",
  "key19": "iJoXtQeDaQDHrMrXpisQ5JofxhpyPhTYKgtuyMToiRDFq3Tzvg9dNNwhnr93Fv1ccmyU47jxtfw585ur6EzAtWM",
  "key20": "5kbLURVEUndohEhS3usRtfdjkhN5iSmy6PJBLeR9qQpuoy727ZqgGjagLkjtUgXimjypqAYuymhiZ3kSfMwoDRNm",
  "key21": "3a1iAdfCQrRNCCMeD6PxoRsGXtWqidDcvWPd33wkATdPccVjmKS7br9o8Rc9AAhRRocYCDJaKiZBJ6PFMyrFANT",
  "key22": "3AzZHQqEVpPFLVNTfY5KT8nYqZR2PxUXxp8w9coENEFhap4DS4hfdHWT7K926yNbgguqAuzSNeX7hF3NRW3RApGQ",
  "key23": "37DuV6sSHmom4Jqn6DXS3TLPihpQqhJ2kFrfEDCzTmZeZBZHTGprzZudeb7xDKLBonTzgXddgpFic6QoaMAj42Wz",
  "key24": "2PAzxZu8Fpje2gsjG12NYoRzE7Q6dRf2w7f1Zp8B3qHMNvjGqeEBVnEfNjfsZkfAC5firt2GQ19rfG1gkoSD42W6",
  "key25": "SXTiU8qnJiMikREWzLTCRY3MyWD2a8uwt9kcSRqXLYomW343JDDXejdRDBkj7j11bKq23iAK9CotzUJHiDKX7bc",
  "key26": "RfEURwYmppBz6LJYsQLckcq4MdEcxfq9PGVsGhuMqrjiC9cSSqR1SpQ4WvWKRFT7BcVuuFu1QLK8HbvdutfQTYS",
  "key27": "5KVWJ3wyz6fMYc9onHbbpSLuxrg8R2VuVTLAWiPeVUXM4BhSmeQj1C6LBjs6uVbyTmWwCqvRwxEhkyeWT9qe1Xt8",
  "key28": "5SSkqQLqR8DjezWhAz7docRCpRK6hn6xdmdkwcWJHonuj3Rrh4qCf8yEJtdWFJGUHwGiy8o8fhUHmfs6gq4Vhd9M",
  "key29": "5UZUTnzwibZUMefLhaMDiAXZQAPo25ZLnj6cDZDxu3DshqdRm2NuVUMH7KqiysMw8V3MxxnSb9LUadSMz7xr7Jt5",
  "key30": "2b6FE1oedjBfPj4hoABxS4LwYfDxLJyCyARbsG6owmVVtfrQr3uSFvf64qS3z8HEMVwcXswE31Wu1f4eAcGPX3xW",
  "key31": "QQ7R5EPKxVzTYxum5RLyAyGtW6f7rgEuZjTHMwLPyQcy4nxZkk6ZD5VSC4qKxgce1YGvfKSjGeC1hhxUUguzkMr",
  "key32": "2B9FyqeYwzoQYP8JpKk2i8x4ajXoZM3mF7ZWj3Bk4z1GLCWWgRFEB8Tu4BSG3xoSV8g92kxkwibDwbN5kmRjxXL2",
  "key33": "pJW6vZ3Habs9PqGeAnWyp1ZToZHVZUEKBYMqr39VKxUBRAjBdnb4qoyT6Yiut4MdaVE7S8pThUoE5dHWpJb2pLG",
  "key34": "MFJwQXKi7J4xhHhuv7yvYCrQXvwor8r8D4XWMr1Aoez4QuBsHQ1TZyRmV75K7LVE3ubzMEsaWXiAT82toTDZmwV",
  "key35": "2NgzSEeZS18Zwkg1dFMRYDtnGdpd2mGzFMta6ZMdAZeWxFarsB6wfTLZ8NhM8dwnYURKb7uwQ8cieA18xYJQsHxe",
  "key36": "4PQg1kbwfDWdzQHzNG74eGSq39xWe1GAgbLZsJK8ep97C8zBDv3AUgrQnuJmdqPaMaL7G8VMjpYNFfU6ikAgTvYi",
  "key37": "4jVJdH2JL1YnuimS98YoveY2Ww4pQGLMcpttpFL4sTeHfbMRJ7kEQ52ahC3Yrvz9LGA5YYcGYHnwBHtnbyk4Uiqz",
  "key38": "4LCbxL5kZt6Kzm2vmQPpwTRHk8SWJ44csXQtMeUngzbudcPX5mCGHFWTwS5L1w8czMVzQTdybw7ZQuUPejR48VWg",
  "key39": "4DAAm5tkoKKUgSgwKAKgzZNjxh8f9gyTY5nmLnX1TZcZLnrSsZwXtiEBwiCCLJDNjouExSbBK9RjUBWiHAbuz4MF",
  "key40": "2efnrDVVwUgUxSoyx2nTr1Rj7kWFfckZPhGhMVc9Zj3vU6yoevYriedYbHw1kLeuZUrSyAgTRegJwCaanSDRnHkq",
  "key41": "3vZBHLmZvvteQxrUz58dTzP9rn4G9aV4VE3A3fk4Uf7jVCzcMsGe5874vCNQ4ecQ71MRr65sgvP5JA1PCsjUE8ed",
  "key42": "5eJmiv5pJBaeDaF95LGQo8YW3mVXTU16GbXa9AMz5wNJ1E5GVNNW5v8YwYr2fYBVcYMs3niqKzGW86L66q4n1AmC"
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
