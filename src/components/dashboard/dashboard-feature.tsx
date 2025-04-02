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
    "iMZcTdhvRwM4ceCqBajDj5LRDvX6t4cb9N4RuKDVDExFtnEkb2cXEhscGZVJU8b19JwAzNWK4gHrh4Vkn7x7P8W"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2zkRkYZi2A5h35LRzo6kQD3JYTfshBzXEXxZ2sf7NtsVkJ1Aozvm1ETFyUpX4Zfs2P4civKohaWEabExeeKcq21T",
  "key1": "2es3Mk4VUbEn4dgg9kub32Rf6hAYARTn2dk4CAWsrVzekUn1vnT61ivNzdmWmQYguAtrFQMVjkFLmUwRfYpYAjku",
  "key2": "4JpK7SNveZKaX82ckmyzjz36FGTcPVpWYxfuvPdyTJXqJJdLFXNsmN4anY44yzjQtAGAzcqA4mVSs8DG4gWkwNVf",
  "key3": "4uZWUhaSYgnpfX4H7eKy7EZTUbiTPtKVGA1S3PZyCQaHV4sG4NCLmkwmR6Q8qaArwHCdcHL1iBjLkXN2kXBbktuZ",
  "key4": "5wyrXaW9SQjBjw7nDR6STSH5EyvmabyM8ALb7Zde4V3hmN689SjRgi3JDnxQ7p5gTCtJmTBumeEWdwGgA1UE8R1U",
  "key5": "FxeGC81JiCdAy8ta3pH3tSC6CbmEKBAeRK932DVDSfsv2V8ezNsXCdAsKzmBfnKVNWf4qFhK3aLyorc1SUABWC8",
  "key6": "4P3jxbGXUcNzhYe4dLyYqYt8ppTEr1DSGCeqzoz5TyjiVm6nxn2gZQUJcwq9EKfmA4cmmKj4Xe2JgKodhpPYF6eJ",
  "key7": "4yuVVtTkCuCKSsARVw9BMF4H35BZmAsbXCVsn74K6W67tcXYQDcKjubDg8Pw3t1ttWWyEd2LjMdZNz83sNB7uDxY",
  "key8": "61geAXEKjjuK132x4KNix3b737aYK3ByCrcZhMhJRkcvfaTppZAPUtbp47CJNuSa9k1Yc6yJh3DZmNnNz9MAR19L",
  "key9": "5qCeGaPH3g2dwvptajhGtjCwp3nr6PWLyFMxNisG8W2sFfMRKVbLjcUDge93SPkx4fC9Jn4f7pahGxyQPem8z7Ve",
  "key10": "4XcfmB6D4VK75MRidBKEoqjwkb21o87fcokidR55ka2qAs3ScTovFu9YQfRbCyJN9YpHusqnzkfhsudGVFFF7FJu",
  "key11": "26j1qBrrcnGgSTCRkxSFfGVpGgJpQ327gQXnrxW9aVF3ykUH6UMaMSsJop8mSTHvDm6SX6qBn7gttwZcCi83GMDh",
  "key12": "MpRWEpvQ2cMEHj3NLwF9rkueJynNtNV6s1e4zsb3n61xu5eajHQquHP3BKJN9c7v2CRA7UC2NkqMmipBexgMiWd",
  "key13": "gFfDxbtLt4H5ddxUybpoWFrrV4XrAhjw35NyQpZmezU5hrv11oXxj8fyHyEGonokCD9NugyUvSFbYHEmYATtL9L",
  "key14": "7wgwQn5UHsTTa5xUnSkGoFj6T2XEQgtqBWRYrCuFz2n8PmWzxDBBqFeLk6xrdGBaEau2Ka5uN4WRKGfwkzQxdu9",
  "key15": "3a47eMyQ3FDAVpFCk6PDWNpqbebVdfwopLbg7Sr1Ta3AT1tb9T2biG3zCEcRA9t1b1Syg2V1J3tekPEvW19uBtdN",
  "key16": "4zzLzK5zc3gW1VzvjatnkcdBK1VY9aruFyue1jixprv1h13BunSCsnCGuwhiCkatAd6vtMhkxZvbx3TKWoLvAs99",
  "key17": "Y8gQwxmqcvXi7UZy5sHuN4jm1Frw7VSfWXYRaofP88REVngGCjqDGPmV2VPsrRhz699rZNGyVjWgMVDQ3JVwwfR",
  "key18": "4AceTtq7kpMBRPjh6Pv1Moqr5StiXPTZeQKLZ5eEoeVunFXroHX1htW3kgduFRRqddSouwxoimnmt5G6p64kXtv7",
  "key19": "yfbS1ydvfE8WWSGCTnokH27QxAFCkKPfDQR9TjuGeufhJafDGTuZkZuWKRbP5oEDE2UAVREV9ma3vD11TdUUGUK",
  "key20": "3jSM46tfaDxxGTE7HCqsigWADYH1LRgh3Sbykm96VJ7je1VJuHJxR1ug2FAYEmnHANK7TKFBjnjY3LqRPcD1SSqs",
  "key21": "3w8ft8S4UjANxYyu8xC6Mk5cq29seGsuske8BUte6uUpQHYqB8MgufYHdntYWjm2M1jq6QfkH1WE71tH31tXYRPE",
  "key22": "3T4Bq5TkuGcvMoPoekpkh6R85ZEkJnjw6nEmdT7crYqQ6pVwKWdfa6XXkW56yLKhC6KxnmrF6q7VFuihmAVmVsEX",
  "key23": "27QWxHzaYcJqZL9dieH1q1pyDWJpeLmvQTiPdZEFzU9gX6CXBeqeiGswPSbGGwScBrYKbj4kiiGwzyPCcQBWcuWV",
  "key24": "2ZEcWD3hKpteLANAK5nYAqfSVXQZx1YRRPknaaejRQyYLE2hb2yab9BtNHk5FDzyEqfu8TEUeB2y5CrLWqiBbXQy",
  "key25": "2EE66fE9tRdhHTdHMGsF86wmBaHXsBPdPurpAVfdYPr769JmqdxtUyt3A7PRXHqmNHmM55CQb3wHrCxqayLHTJXn",
  "key26": "2tmvxpyeNtFk2GSgsn7b2kHSTwAWd7PTicdexqX2z4Bv6RDbpThqQ5qMSNTaM49cq1MhC4o9VqMUTyiAXWMmBkow",
  "key27": "2DkboRjBS316341PQ7dVRvCtgF4qBNYyd6dGsT318pe9WBm8TGr1s1Zyr7ZsoARQK6FxQE3aQ4ABuLDwCYJ9D96d",
  "key28": "27Hf8fVG7Z67NCyg5xaHEAZQQUsgvUvGgf3BwGScbq7tdqNknxeU4LfwZFW7sMsCaHv2hjP4SNxyhQjiqGK4fqLf",
  "key29": "3ozVQqyhUAohrxi6zbV7qDgukKpEggFozKU3gyY11XrWJ9MiHp8WHRwGRZHKbNFVR2YZ7ivjDFr6J7gasfxH36YS",
  "key30": "2ctVaXU3popPJyBu399QoS3aRYdWU2MaRMAn1vwtFkHxxkcucVH5fby8jVtgegNrowKxGNW8zLoytLyuUdyDbEkH",
  "key31": "9EaZh94vZihUVXgsM2UsBxvJp7wqR1KuS3e4h25Q6Q8TWqy16a91NWgmB7khpKUZeLeAUegs1SqzNYDXueQrjzq",
  "key32": "ynx3GJ7hTHRyXVRj4Pd5hLo62SV4Jt3L62Ek78W9a8HLYuiQRG6udz1zYLsqyKPdqvTDqonovVsPxiPLPhXEuCY",
  "key33": "2gfFeRQeYED4Nz9EYuF168V9J6NJj3UQ7s2m8SP5s3YtQv8mghvMyf9kgYzBj6cyhhcrEvB2Adv9S9L3tMRmt45p",
  "key34": "2uEoamRw73g3sMhLAooeXJhfja3jfuy4E5kWraxQnd8Ub1txuz8fWsrp5z9wNGNaSNA8VkuwoA56aUiX3azKwWST"
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
