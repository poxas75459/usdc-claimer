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
    "2gxuhgUQ96iPZ4Cc2YErwm49fVPuxXuskQHziE6tMHux7iKCAQMww9gXGgdgCLJv2NJP1TysGxSpRjyaMEwe24gw"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4ies9ijB6PBsJQhVLUhVtExz27RwCyzDKPvgQr1APDBKDbq9sC3uzFvbzHrpXwgfvRt9VfgYRcvbzAcqKnqLrkdG",
  "key1": "51t9qVJJQ7xL3mxzakZDEBLU9RDbFWgKqREaWpekbcpoaPb9xbSZCAADEWjKePK88sV6xNUeqvP4LxyxmgXuC3Ht",
  "key2": "3iMciB42HXdcsHszDYZNP8zLrHFG4RzKjdHeAMv37crqcQrTkvHnD6MkEqDykwfNqvX1K7ZHe4NoaA3odZSx64Vg",
  "key3": "GVLGiAKpqW6phRPfW8tH7CKQHvuQC1kERTQmb1Bpaagi2zpbVjbfVscUEAbxDqSg3LFBDQBGYKoTyGHi7GfZkGQ",
  "key4": "2UvvcDKWRyQeMNhZR5EEG5ZejGiUuUFxY9yQox24nPv29dDCDsrj9ThsN2q1ohNs6zQQS3s7ceMxPrSJiLyaycec",
  "key5": "2hDSLgvvzbXNALwEYa8h6QggfLC3zsC4R5tToGL8zNAR2SRDxWMmTRcTRNKJzqNQTU3UvMY36LSByipXdgk8VcPh",
  "key6": "w6QBKbbCgTb1pooMmSD5ho3CeUNB86KGeC8kynq3Zj51Vn3fCszkABijnMhjJQro3T7Vc68Rn2seM7wz46kqwAg",
  "key7": "3vHGDKLV8GbVVH5TXBtRMPZfxrhtaNNcjxwUXsUEoxjUMN6Ybw9MTQ45QsJU2ey3StxWaNimaJ4X3m8nAHGEKbTt",
  "key8": "4mjpyZg6uFkV6AA2dayNfSMPygNVBHdXLP1eRm6WxtnFQbWFv9UecjQ4ypafAScmuj8ETZY5arcNeqF4Rp3hL7Wn",
  "key9": "55aHvvqD1tr2V67LaXZ33AG35E6QwfCpmiQum4c4Cgfny3iJgJGTUVS14cd8Y3zEkFHYgxr3bz7kLKyeba7zVXKJ",
  "key10": "2EPkYdADyw3Q3NyAHD4thhApr34q3nqX9RE6erYjyTsypPqDN7Co2FCPxTJkhc7tKcSRK6Qn8qtFrmUdewgyeMp3",
  "key11": "t58mHqQRboSLZA68x8q3dRovXPzDeXjCeQFN9bShPy3cTurN4YnYQCBYSJKzYYTkdTGL7VUNCkr3VqaAZkBXLRF",
  "key12": "5zaB12myFMpxx9xB3JZcT8os5quzduic7FJEwVHVuqF5UsjFLzzKWvHhJo61Giysqaz8ARdSjHCthykwZ3q7VrWf",
  "key13": "3apc3BCWY887hf8vWu2RPqiEYTXcEA6VpW3SHzUwMN6z3huzDs5JZHeXxxHCPqdGbkb4SEEhLRiVfwHmwyRnxKMT",
  "key14": "3RoUHAkUGkQ5SPQzx9JF69C6g5sEBigmYN2waCtGGRYVSHjuoYYh22m9semt2UfEvFe7jpCGmZCHD71a3bHDxipB",
  "key15": "5LQZ8KQ6FyozEGxQ5wdbhgbPV1SDgTmEkuz6h42DzNK51PwJC3Qvjp5iGcZgDmun7nLTst2qJrZQjgujbKKsTwmy",
  "key16": "2ZJxLFxwrnAP82dxQJWZS8WenATcMWtEhFM8A5UKNjuJqELNPWSU1DjmanRZMzGwwcF5CMP7JURfpdFGt92QK5B2",
  "key17": "639uTSXjxGMu9PTNcsgeSr8PMFH5uWswjFBZbpLcTvxX4PpCNSowxhPZyQijmreh9cwNj79PeoHMXFb5MsCGVpzV",
  "key18": "3LgqVsJgkYoZQYhMjtwts8z2wGSPX9MmPcsDaZKbrxG99NEzfm5y4Mab4g4kvv14jhwP6EWDKXpQNaZ377pUHYRi",
  "key19": "gmwWXG4LQGgCBpSUmSr1Fy7Z2GgSoYmA3KF6HPzy5UurTmrjpxMo3rvatVT42aArtYmR2u3ZSjncLsUndbdrtqr",
  "key20": "4LM6QiYQsnKx8CdbZarjgSNnmY8jLedivAFjLoHvz1wt3KDXyD4HXaTwDGJtZWDM8qSebCfZXT2m7Dd1rnDEFPd3",
  "key21": "2wqWnUZWuEUXPQd9hJ1RhLsBB8SwsmHxKbkwyRFMyuvYiS1hHVLmRM7uU812HCBouBWhiPwunPkxxXV6fPwrnymf",
  "key22": "3jbKECSuK6Y8miiL37iuNBdtu7h6obQaKjVZqkPCDzrzUdsBo1QeCC1FZ9G4Gs9QGCokDaf32HWmdi2HQko8x14p",
  "key23": "4bHhJeBM83zjGqXJcw3iv5nZgLxrXuPQvM8MMd3SVKa768oBVFDaiedLdeZUeqgimyn5gEQP8WWZ2LeksNTJSWT5",
  "key24": "65Uasd8BT67U56nwN3ZqWRUAVauxJ5q5RnZVaTnqQ5H4fcLikJphBknJnANj2zsQrFvc2NdVpPREBoGjpMC99jUi",
  "key25": "3tYSaWgr3Ev5bMjmLhbL6MDCGqrSYLARdhp1ecmzVc4MuYCzZ9SontiEgJqehdcrthHt3G8CKFDctgmcMoZWfpaR",
  "key26": "3JRPYYAxPKLDvTZUcfavLYz8BFRLhcg1CRpk4tSqKqj1gndJwtz4ir24ZBfmpaUq4vs2AGj56uxkPCmQkCP8tuzi",
  "key27": "mLnw5Fwqs1t8iQWCTsKLznXkRzk7cAF1dGkYkE6chKTpChW5jmfNajTtwx6245EqehDW39cLZ92mmo4Rq96z1fN",
  "key28": "3mNbTPRS8psdN1mAGLpk8ozRcFATf6TLDg9e3NApjZRmhjR2bvN6y3juvjuipqbSNeQawkg5DsrsuKiFj99h5QNN",
  "key29": "4C5YfwzwtixyrD8FcDYHNrhpofvRA35duDEfCt8EzcP7gXWSDogJBknERTpdj2vWYuxVASBhvnY6hhCRu1Ug67if",
  "key30": "61nK9E6SnCkNh5Q8ghrXq3ybuxtVLG4JSbEk3ZE13pwvJfp7bpw32wuMuF4bzUrRZkMQf9c4scSTop7pbjkvP7eG",
  "key31": "3r2ruMcJhR9VHGSoZ28URLfKcAtpoXRuvt19JW4oFtspD1ADAmfpdgK3XgwF3BEq3Q7erWaT5tcdyqbZ5BRmZVoH",
  "key32": "uryLBVGcXzXm9U8cinrKR1PDYikHM1kdvrmQG3zHqQB8SP89K6kjSnGiLLWSVY2mJN7QCDpM43sQ6wdHzythktb",
  "key33": "5ZEEL5PeX5XPkPXadPUZeNV9HMkgQECF5JTfj9TR1Wy4imYFtU95UCgXQoPbAEbE3V16NEwvszqpAnUpFRuHZeyY",
  "key34": "4vcQJz8unEeVDDGmNdAJbVruRGofrdVuR9KCFBDp6ZaaihkriA8uJR1rx4UHSSKMjkbGgtLdMkUgEsZkMFJ1d8Jf",
  "key35": "ZpcmYCRGovmRebb2BtKzdw4WuEseTdGiFNTzF2JpvZNNkEDqwmBgJnjP5Yi2rfxps34ikFM4q2pKcWeeYDr147h",
  "key36": "L5GhzgN7yBmJhAPnDeMEKknaJ6fNhjyXm5ZLawY2u4VxYNhaexzdT9KPkhSSP24No6VThTmNAg36YL1yTN46NHA",
  "key37": "4xEKgrv8tKHs6BgsedsNfQhs4R8fjdtMej1JmAjyq5WBEDXTkC28Fp7LuYyEKuQapSGfET4Fquqdx5d7EETrteip",
  "key38": "5HKmnperHcSjR9WGXoGMNVnyXeTRpBaoL2gRdK1WYspFmMrdRLttKffYjzJMdKDVWZiUFzv6Fpho8aY5cavw6xw1",
  "key39": "3GShTXrwiv6wXgZQvUAriRxusx3XSXyUneD1nEBFCGPPYQWh1BbuwX2pSB3NHT5A4nWtBzSge7K7YNY3ZyzGNP9b",
  "key40": "WS3kMiTwSyq11811HQuH27SS32UTQAKBqZ2xdu5fH9iePLRzEqvXK1dbu3ytPDWx5AJd5CLk64VPgwSg1QqvjMo",
  "key41": "3MEhCYjhVu5wsRVzCooST1xN2EkuBVkEDB9NJDHSunu3pYZWzHdhqLFG7D7FnAuU4SGZiRzdVgD3xsekYY69kEzQ",
  "key42": "2tjquW8Zo7pW8YcwMxrmbZCHP1L5f8xVZytVs4DUgrQb3pvLYWk6xhLm3VCKHZGqXhzsDd7sX8v3FEnqvCbbamLA",
  "key43": "54SJVRe8WnyD2bcctUeCE8sPc6CqM8wkkbERJmuc9N6AJ5rzQVGCvvwQgDPqoueb3CqY5q1FURbeLuV7Rphw81Yn",
  "key44": "4BaQYfzcRf7aCZApCsUNUKLW9UCTmrxHHFcWspJpxRWNVNZvAvXwY1YoLTn2dvDxMNcQ9bwtVtdSTeuShwo1bAUy",
  "key45": "27jdNqjDhzKU7eMMNjLV4KBzik49bcwe8KxecnE38d94QouQq4tqRH9dEQksRiGdgJhfVUtP3FMQik87D3vm6Vm4",
  "key46": "32FVuR8iv3AvWR3p14ux1SAkj5En91k6t6kuejyYe9BDz1Trm1sMSGecA1UXGeyi9qf1a9xksJPvQn1AymWRZiTU",
  "key47": "2B5bJzjSAxNPdABJVj4MEcSFVDRXsaA4R8XVAJbE5nxh3age7JkiTnZ3bP3ZmHWLy4gQKgBEqUfqJjHyiY5o2sPN"
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
