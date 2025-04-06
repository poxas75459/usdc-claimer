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
    "5vFBrSUzGTQ5iZK4wYrTmyZx5NjFKM9EfrH4ghjZDzRBAmunJ8q6qtJRBhiuLHtou5FsHQsTC7sX8nSuTdCisZRo"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5SeUNYDWbGyAJdrwMyeDxKirDu8EKK4B7WUcAMBeLJeMPcnKHek5uVxuyRgxHXFFWG634gySTYJVmgLriLxdEtXA",
  "key1": "3YnQchg14Gz3VhL2bPMJEfZPeEBgVCCDHbftLNZdECbhZDAnJKnFchyr5yTrV3RfH9m4XjaMb5idmi4SUyMdZRM3",
  "key2": "9qmHMZFhc2ZhfN4D9H2vCHLmfzcS92XZHzcgG4AkPsaNhHVedwSbfBhBHwLckrzUp1p3Z8WjA2eH7T31xBXELdE",
  "key3": "jd9bDau97TnhFrydm2FuLWp5JdAwGGWfCSgyrS1RooMjsSn3D2ExqKJyj8DHLqrRijVDK531G9Vr3dZbj2dwEHf",
  "key4": "26oEoijizfZyarJGJE6FSJdiZzgoTG6WhiHdTzUt4ZD5dZ89qYnVL81BfEcN4UE9YzWzKhSt168HN5A1JUs3ZFeX",
  "key5": "4HaBdUkDi7XGeRJtpbUwYY9vyXBfC5UFovegkjYyZxfMGkj6cPKkgR21LjtR6KbNZSUrjBsoCs6HddLtukZ5NeCF",
  "key6": "3Qho9uQfpboe3yAjpKg3s1aRr6FAKm19ksUqS7PQouYLzugBywgWHp24P3uhaAergfgQEcwyZvn1Dg3vTogXpffd",
  "key7": "2UUQLWEQA1RLx8STbQ8W1hnU42pAGkiRvpPYt3YjokRa13GCT5uiepSGsxGdUkhpB6cSBUMtCVbGkHuH8EL8nECm",
  "key8": "48Sx92DCenY8XdThqZGP1KRNnUH2CMSvnVKHrJQPTCTjGLE5rsWYj9rDWaQmMbMjsS9H1MkfDNpVEx8BbtSgp3X9",
  "key9": "XjEAB4XPXd43TL49p5D5fWb36QJwNVeEHC7pszAt7bhwjs8MCBNzKXqD5jKgmpgrUna5MBzHuaMRg5hbDoWKhz4",
  "key10": "4rbdxabPfMVVdPjEXcWugZUCxPf4C1o25bQrVFrEc2hNRwEVG5Tf6food6YR3k5rUTfGoAs3woj7QQzS5A6ppkz3",
  "key11": "2Dw7r6krXvJwuKdjxqNNaY2XtAJfnVGhu7N6xPsbFAMiCMhasf2pQYJRp7pzBmRTLmvk5BHH6D5vGRRfDZLVJhr",
  "key12": "4QwAD4EkNYbfsXdjcWcjFo3YXRh25CrcZMCqQzqgiCejUyoY8EubHvRvtP2Bgk7APDpYD7h2chfPa3LaeszRuDow",
  "key13": "2exj3THQayLYEYQXwJVwMGgoiMWeBrcYARCuVDcxFrCe6VMow2e9XuyqhQGex7NjDxxuwaQ4gUzykgQpdwmuQUZg",
  "key14": "3YkQCFf3xxVKhDFuoCkzULfDqxhjBzkLDYStPbfiCCRvq7ZkMNGPhzmE9r3WBFbagF3RWsHFdttzJUEzZeJKee5v",
  "key15": "61GgLNq3NXisJjLBXyccHm5vB65qVWvdrjgVJrunkUrUHtmLhFpADh42doVxgURfvCoAYz41Vtq7MbYVwQDxCJzQ",
  "key16": "4QLhXdQdGa4LTRvuS4mBT2rrtPYKUuYztjCvTjsuHXsbjwzjLguotGtym67WL9rHovQ2y8oii5JzRs4z3Z6i5vWv",
  "key17": "29k31DVLMto2enxh8Fqd7YDZgmWW47GxZ7oh9Kzzw8uzUJ9m1snfXNdfyZCD6Cr3C6d3sFDnDFa757BTz86nyvnZ",
  "key18": "2LwVGmfGoFaxZc6mG8Bq8mBvGTy74LMHoscp3VdHqfF4WnEyQ8sGsjUPCMBEmTnH2eqkYMqUPNbXZQRYykZsyi2e",
  "key19": "3iE3WhDuhpF7JMwYooUCv7uD726Nc9sdn7VfaC8dBdBu2F89sE4dxKTpRQGy85384jS3G1WE2nFEXWkqg96pECzy",
  "key20": "27omcQXX8ms1fMy5JN5HFRxptq6cGm16ScaYeBGE2PYngKAM1WKTrzDm6LaWDWLvYwuf8v45d7x3sNYqJEriXEC9",
  "key21": "3zggYkb41eAqAvtu1DvNx1CHUpujihrhDhNE3aZWuhSbVHFG7gXTu1jWnz8X3AYVLRzPEVRGfi515tytLEHsbHmH",
  "key22": "3hR2oxzLtucXnSfsec2xtKE8wjyu9JMdNibkorVgX1qz4FoEqpcJqpX4RkJ9S52oHr9B49yCqaHKB4VDE51GvpzZ",
  "key23": "41Td7GN8C9tVPyRetjA6nrSxfZXUtj5jLoCrbHuKt4NZc6dPvn3Z91ZPDxAXGcdm1ojThw9YuteQ293EmuS2ReDX",
  "key24": "4tY3DQFzabRuXCrjibouRKQ2dtDmUH74ieK1gG7hwPrV6iytk3QYJjcGA9ZNne2ZX2caDdik6opx7j3Mv3Pa6tpV",
  "key25": "5fWaSrUXf9v53Jm3FATLnerRweC3cvKYXgfQ9LdCjrzCR2n7Uz42JrdtpLUyqr9tPHdcccAu5gfgbMGQrCkyx6pY",
  "key26": "3vMwf2JdAc1n9B6MT4rE5RfzMNkkoQgbdDkRb8AqQ8HvaYbEjcCtTq2CXwqbDXAyoHukAyWextXzoowpbRNuDXzu",
  "key27": "2BdHDGUR1pf7TADWCnDaof8usMgXw5WhtVCbSZFxG4uSa1K5hP2wh3yE6jVJZnNn1Rj2yMDLGJWE6uMVihVfFegB",
  "key28": "2Af3f8xMhhzJTnctBQy7AmDTruo3RrgDqP6vYXbSaNUf3jTpHDdBzJwaTsn6AmNahv8gJRYGeHyyQ2YRvyXd9vc1",
  "key29": "3SEdXq1cYzcDcuJqyHBQy82PhkhuNZBmJ9sDJ31T1yeKRNgDH9j3ymZjWYmQWG7oRkCgyTojjWeVBGvM9ko88SA5",
  "key30": "55H23wiriiyNwBj23ufjDfWRAsdB45RhGqVtFT9wKAxNK4uZKqxEEdLPydvscnLNqqBUEpiD3vMzzW6Wa1kqUB4E",
  "key31": "4tcxk4b8CVZ2EVS6qzatvB3pbeayVj76Qr1xYNvayR2byQyCNVaY1qenZBp5sNMKXhyGU2iH9YPc3MBdMMdLkZ8i",
  "key32": "jaSf3mj5jY9qJ5Br5XLHRfvjC6CUZ2DJEitY3jxDZ8RYABdqXshM6yfZCjcZWBpH4dnuBqiysZtE8rpdjKvbmm3",
  "key33": "qkaRCCC8thPwBJSFH4KkBcijH5Q6ofAtYGGnSh5M13ygzAY2eCn5fYQn9Vz91e5vhAGezvM5Tfc5aqGb6xiTVTX",
  "key34": "42aFQMztgy2rRRLBsaAaDpAsbCPS9x4HzwnTPd4d5tEYokEeaCyj9Kyg2HyjCA2uaG7RrKuxHF7Wp9dV7eDmhbDk",
  "key35": "2EZDifn2c1vdt88vCCmL1b7CQTNLDMDKunGWpaf1ew7PuUnjoTqPusAhofUcKZEuDKWHrfFwDrxvpCh4h1UpkXug",
  "key36": "2VrAgnpMMKCmUMyQLqFFj8rVrXnusAH9UGhDiwEQbVbNhshg3XPVVpkrJcXV2BvawxPSVUhYPpHJJg3UQmumENkT",
  "key37": "TMYLM3XhsvtLHJqqsLUBp7JcEzqUxx22vR2TDn4gEkn7sKxZHXf9rL42HBUJGaWi9xKcjEh3GNmHQDgkt6dQhZj",
  "key38": "233h5tcfPSsYfNAHjXqVhpW27VJCTz52qchU5oRq3Z1cWdD4Z48aibK8UEBAToSZk84ncsfsB9NnXqo195n27rQr",
  "key39": "5GsUu6nxw5zBS4HGZyzKcqTejCZJ2vjjSSCvmRmduAoXaoxuFfNGqaxfMqrxkLxfx6HDh2pKFC3JGh9kDDp5ZGXv",
  "key40": "3nTcseYXVjhVFvtWmS9g5r5gq3kfWsnLH6Sxzsgz1E3geF9v517WA7nRk1rxNQTa8uzZMawXbC3Q8G4X1mwnmzET"
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
