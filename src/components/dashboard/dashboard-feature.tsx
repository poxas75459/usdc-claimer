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
    "5xG2qGN5R6avZd8Eu3PKrWSyZwtAEoy13oZfto4Zyn6CztDzoDscgtaGc2fkLFwUNyHqJ7N5uoD4Tsw9h7RMqK23"

// DECOY_KEYS_START
// These keys are intentionally exposed as decoys
const decoyKeys = {
  "decoyKey0": "3bGzLqbWYrjJn5L7TJ7zVuNUJP4PfdWTtfUny91LbHgMvo5AYTGYiwA24zk1QX8RsnnNpHXs7cBECt7roZ5vMdRL",
  "decoyKey1": "QJztUhWw1mwnC8Cueoo7BA7UdSBSEpwtmyA9k6R9B9p4mhUG2yirnrycfw7epk9c9zhMgihmCHfTbhdco6E7gxa",
  "decoyKey2": "4ZgAdaxWPvForSLcaUjSEGH3yJpeq3rJ5r6g1sFC3EXwxUNdSe67wZGnYdSEDwxYGHU1zHPFAjuqBorUDGWHGHnA",
  "decoyKey3": "47MdtjqBouLuLM6z2NYmCM9Q7RzNHxCXrhCmdCtAZx6mE5Hs4zDdWMhgecgzAJm8fz9JPCUAAqeenh21vvQV6qjF",
  "decoyKey4": "39tiVeGcLudE7YrF3usKV7vvLuTWbUd35KxcZ6fsWpSutrm6Nd18FSfFHS8maq5yLY8of2zoze7aWCy9dtssFuLA",
  "decoyKey5": "218oVFvmN2aMsY6tfrDrDvWskV5gjLEPWSVCjZ1BKn1VUgEdb7gVC4xJomcRL8yNNCg8XZkHrcEwBrieLVRVFrAg",
  "decoyKey6": "59WLsU18c4Jw2YXrerbkxpb5frUsbq5qGgUpBkt9r5axeThdouZrmSM2hRb5NAUJV5u8819add8APT3huDdTnLUy",
  "decoyKey7": "61qsUjB8vgA5qkRmgVYhXXsFCTEoF6owyy8fXCbrcz3bqMqtxYyH742Jj8jz6jHZvVPuBqsTrtF4XVLDeYYfRfG6",
  "decoyKey8": "2UqM2hhTRskY4LiMdvUs1Xztnh4LYJ3F25pyiAZBwiMydRBvtwzfqxb8aKwvZeigVheJDaCu39dFfHUpBsmEGFtn",
  "decoyKey9": "5EBKWwyHpxiSreWrz9fJTiyZ1fmopDB8emRpdvzXrda4Mb9DnXRq5NKLrw5BDYf4u8LPYpjsZ4Kji18s45KGa8A3",
  "decoyKey10": "4sirB9K6vdcwkc4MaDfLBfhx4XxCG9y71fphqwdVWCmAtjzgVXDZRn55ESjoZrhFxngSjGXFXvGTx15L2ekXRbiS",
  "decoyKey11": "3qSDsLBCwzv8gcEq3W8YBCAk8dAoMcJGcoxv7T8gKSq4r4FQnPtLeoTXb9pg8YZnusjpiEw1EVeQR4Zw4Z7pmomz",
  "decoyKey12": "2DpjxR3yiQ3F41GfJXyDx3TZTGT7wAwYfkxmhRS8nvcY8BwEJJ7AGrWzCEwb8cP221J5d7EdUa6JjwQRRQGYGa7T",
  "decoyKey13": "BBBFshkm8KahArtTC7aBSquX9Mbd26VQsDARgBpo4eux1fxiVnbfwHvizdvyd2B7zk9h1enuYyaeZ2qkdghZ955",
  "decoyKey14": "38rNLT6csUxFcZrp1yEu4dNhQCMeafVNeuqm7DvExwo39a4dVz15uT3PaghKCZZTM6wvG78eDHwJo6wbdwoipHR1",
  "decoyKey15": "3g79yJaCfHvfc7f896L5Y44kRY2gPT7Xhht9mR26sqREw8pMxMnqT3NXJNAo5wrJm8DfWU7fN1hRVLJRhLLqCdWv",
  "decoyKey16": "5wLHFTGbCfcXcU3uNfaisgpjGvZ2p2WokAg6mEe597FtQ5GFb6GRA76cCnWqmHvcXsJPUqNB8Ea6NyxHoXCPorxh",
  "decoyKey17": "2tFZW2PF4pm1V54Ktwz6LSPfCk9vunDCTq6vTpnRNHn9HxtkwnjPBFUbCVg2U2C8oDJm7bGFYcMHhTvXTBgWXqii",
  "decoyKey18": "55XPEDXfcy27YpB7F9aYFCx4tP96wVpH2RFA5gj3yhffZRfNjbA64ZXQR8mZ3SbMWgKvnuwEAyubgeLhMRveeE9D",
  "decoyKey19": "35LqbcxZK2zriHG1yQTQzveLBgAa88NSePvpPxkesNHm1Lp93KhnQziUqMFZ3nxUdMRLpgLsXZykcZfPokFNKAhA",
  "decoyKey20": "4QBF3aQfVDMwXwpup7TY66m3Pj9xLCAECw8B1vexrWeQnZh3kSqyXphSwV2QLPecy4zR3LYaAKCu5KD1gT7DJcfw",
  "decoyKey21": "4YG5Jm7k9Y683eGB4MF8jZ8gr5TeQCBvdKNAaya9CntHrkDADFnyJzLKuR39fq4dtdUTVQgj8FDvBi5PhWQf69M",
  "decoyKey22": "CTfGaLcc2r7vfxYS51EwprxTU7CsLQnehkvhLzWzb9EtDAMMY3ehdJ2QiPWBgT6mCSjB1SdJnYVasptpjrfa74A",
  "decoyKey23": "2wwsXctniY3wTd5vLekp6V8sqfsKc4845Pf5bktMtPVJ3zkgEaX9JiGRqmQFmuJ2Qk5bSERRaaDmevx9tFmpKyfy",
  "decoyKey24": "64xifU1fq54SEpJmCtmLNJnFnX7PQNCQnm31d59FxYG52up5UfM3qWALnzDarYsSTZE22HQ7UNV8xDGwXdCiQCJV",
  "decoyKey25": "5r6FFTTToBNbo6Mq9A4SYSvA8CHCd311AbCNXYZmqQo3gWNeiDnDdyCTY2Yxn5X8tave9sQHctr48Xy3m7Jq7Emg",
  "decoyKey26": "63HP68456s4WTnrBnuGfYF5HDBQLhMq9qGNrgR4zBXqK89V2MC42rTyvnWR6WPHZ8YsD3M8cNNQpj28QjKU5sHvk",
  "decoyKey27": "gZKszqsCRszgpH5DgXGST3hPYJYmabGq8K8ZnzPDCyi8RTdnkjeUP81emdJU83Wq9LPCcpUz7SD6SaXA8WHjTSV",
  "decoyKey28": "3n1H3FWeK2ma6rRc8djxiGvX6fNyGG2NaM6ZbeE9MGCEZ4gRA18aeen2psB6Rhn4SX33CnMnqH6fwgAAexJjwayb",
  "decoyKey29": "rEr1XFdnQHW1Pa67okE4U6WufRm9U6YP31tWkBCWCzB7tg4KZYJ9aKxYVk5JEWUiMx7ZRAD4RC5W5La6N9J9ST4",
  "decoyKey30": "4ymrFe7QR4tGNk84PyQiKKP52hq4eXBbPPQNfZWzyD8u8JiMHq94hDUUJ8wHFf9gEquYMEJ2n7S4q7GTUyVvCEYS",
  "decoyKey31": "4faxFwhjNkbENdNmna2pFfmLPWeZyuAFEr3R6XmZpVD796mbN6ryoBtNMJLxh5xQdmbS39A8FYPqkqRYa3DdQiVh",
  "decoyKey32": "3v2q1nGzu2RxhiRRj99zw5f1NeUfFDidEh5otXkWn2MN59m1pSTGhhYYBTu4dvYgom4qnctyygxMAHiN3G9Zb1KT",
  "decoyKey33": "edaq9TeTejVEgrT7vkcqQkcJJuJkeP95GoFvHHrm1E28QRovYugGkKY5bidEgaFo84Xca8NuP4t2f7NhXoTTJDT",
  "decoyKey34": "5EKAEKYqMK2JGVpvVBDSD49WJZVQaju4bBbT6ZbpU3Ytf9wL7kBkKz88viwyMdUYd4n7dubV2zE8x7L9bKfF6rV4",
  "decoyKey35": "52tzgL9DZLfbyr3uCEn1smUmzpkyxjRa9nuzwicYShY3icMvYBqMzcF7rx79zpcye6MeBhhQGhMMLZrVAkAMzTYX",
  "decoyKey36": "587L2hxp4bk22Z3GQ6VtFPiHnbLEdDwMnksdGJqTXmuNtKaYhoY7G4PSoWWnUXkaWm5jpWXiPQj7EcaMXRUJXi24",
  "decoyKey37": "2pFjaj3KttqgAch3L7fWZXLg9reAEoDYnNFueH4BVkmvrKjDphCa1J3mK1y2Kf8mjmYFN7TMkUcGKpq14WWi29pZ",
  "decoyKey38": "3E8bMYLw97YQTwBM7nhHfwXPw4rR6bTYYfaLUGqX6Fci9FgSnoErqauvAY9qGzdpKS6k6YTuUnFCRaT3sHNUvczc",
  "decoyKey39": "2HpdatBod6PSc1WiZ9fxEvAPL2NAx4E7dwL6BpujZZb8vMHkfC7sEbXsBaD8nWfcTjZ2kJ2v2CSNsQ3gaAumtHmY",
  "decoyKey40": "4TCDuD7TYSYC8KE4B8ZC7sotS7kUpkfhqKGF4BNsjY6v4Rfq9NMLmzCAnR4gvL56iUWYee4pzKgZi8eHVq4m9nWG",
  "decoyKey41": "3shXnsM72uGNLmqpfe3KYEBDDF2qYsB5wC7VCD6khRfXwy9jPQzBuK3aP75FnZPskqQKkXMJiMqvbvwE7Q7Ck3EB",
  "decoyKey42": "AmRu8EC1mstZG9ACmwusQ4ubNwatm8pbUaAkbYiaF7bM8ujZRz9HCcfxbHr75Wn4qPDj2iYzc5ytsQEhpMTr4u6",
  "decoyKey43": "e9RCF1awyHUQ2iuyLddzYpPb81HQpFBPm6jHWsp1KGuMqL4tzTPYnLuFQMt9XHsqAGVFyktLwRPqtjr8ZcC2gCs",
  "decoyKey44": "qoS2FAQEAXJs3ssjJHwtNK2cA5BLut7taaw4aswk4kcDTG6yTbDQc7LVGeogLTeY7BErpeqbzQduu7CX16qajpW",
  "decoyKey45": "5CVF9dj87sZiicsWMNj3tvqU6ab4AexmvzpEDSjaSfqqPQGoLWShdRKRMpXJyo95r61eu3YC9DkuVTNjBPsrvU7v",
  "decoyKey46": "4ZQb4hNLCQjPUAuKMC7myoDtSVdwStXoQ98WMZd6KSLm6aihkpPe5SJESDqNvVSrpKrGDcebLBRv9hfW5WR3tq43",
  "decoyKey47": "2KZaWS3QVdvoJhSXGx427ciUBG62m4QPhGqpzoAoVDN2Ahtms685Xo1dPk6LU2gXV1kGcozonCteMXeMnJqFQSub",
  "decoyKey48": "3RVDSh991Z3zmtYeFMd5cbtqRG1vx7zpc2qHsCgQkzssHSALP55MungHPWxuM1RdnTgE4Lj4zBEy3DdBHqvDDyUC"
};
// DECOY_KEYS_END
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