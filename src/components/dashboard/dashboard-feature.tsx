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
    "3YVTmJwn1Q4rjsgPs9GDmHeLYokhqi7dpC55z9XpCUVpBW5WCbEdA33J53aJfv9ppdRfU8Xwdp32mivWwBCCWfje"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2KctAM2SRVemGhruq5CBGvMFPDrmCdmfFp5dW1Y8h6Eocjo3ZiQfJZzGU8UFJLDMt4UsNrNRQ6YPQo92Cc43nVLb",
  "key1": "rCv61z2ZPotBmu5t2UjREwSsRts3vYRXNVGL9m98H5BL5yeiD4gHxqhCDbgEvU8ytC2VBBPRDpEQrz1N5Fed55o",
  "key2": "2R6BUZuMFLJJg6iDBFQuSsH5xqZEhGNRHhvcaeoqRZ6akxRvFi7XRnnwyX2xSkxGpPhnjuqdg7uPRYgdpxzdcVUj",
  "key3": "2PnLucE8RDNqy2YVQyFpQNZENCFJaJryqrNLynjvkRx6HNe5VvWmLfkYssob3ezEDrFzcbaFkbpBhsWZv4gJXk9v",
  "key4": "3GQeoidkV4rdedbP5Sgs6Hph3hzMcqfh9UCDo7L2EijpSBuny1VaAX9sPi7D6XQqUH2UiNHGk2nGiRsiawHaF8DS",
  "key5": "3g2QTnyjRj3dERZze9r86vUmng5NSFrnY3Nc5jPnhc2HvXKQsznZSRoT2WmP7zJzh881WduPCRbEnFLK3C7mzVy",
  "key6": "YyFWa79fwmr1hj8ZXcbwhpJB82EJKxXt4z86GDNeV8qQTqLhLAQzzigghq1RSUCmBSxaPSAo9HVXyfAnP3EuPSD",
  "key7": "3pjyRGRMAz9D2B4To1VQ6rgmjfhMrpY4yBs7D4hkmAXV4v4LbhnuMUD8JTnQFJQUAftKLcqrA5aPfQ1WZybeeG2U",
  "key8": "4aRpYyR6UYjxBkE5YnuEpD4QA3WAtxZbzqL1Hnvy8PP54jFbpxAFFvjmB7YUJSS5s47RpsB5SZEVqE77WwZvUzNj",
  "key9": "4BxpJ1zQCDdDTsR69yhtvaada2HoKoB5hAfcECGmobY7cBdthiUAGu26UKvrEa2af1uLqybjsKu1wAvoesZ33GmM",
  "key10": "4pnmFnwgafkKsVPVwsBN4sCH8BzGugqWLWASGgiUPtLTjBVkRRsG3cXfhSSzN5YvECqQqioXL87yLs7NzQscyHpy",
  "key11": "55z8vYWgvhfNx8LCZcUx6Mgy6qkMRxkWxtf8wgKgKvKVwgjtKoGUYr8ictM1HZEWbepDRLXCuWSXixyVwqsiWTkQ",
  "key12": "2XvupREYNKTvqhiKaowtAmTfXttfVT4dmaQafRiqF6YXXRRMMmtTppSKRdrL6E6doRmrpfN1bnomnFjkzyQGdZCH",
  "key13": "5yY7TTu1iWTTCg2mnAGgwPGbY6SCqg5M9AcCevoknWP6TuoXxhRCFKiDSLbg8xTnxg8GU2FonRScbSF2XBXDcY1w",
  "key14": "3SkHp9rPFuFBwQ7emKeGo2Jf7PS6EUXgDzymfZ5tdo9S9dE6zMdjxkzUzzDWzvQzQqdXtYDQPP6CZS2cEJ411AM3",
  "key15": "Faxh4bC7ZTTZKAawMFeLB8phirzHDfRH9ZMrpZBoZtSbTejsDzsMvLVjMkxujzfeTGyPoegmi6Py5CeVL9kpJse",
  "key16": "2H5yVjSYFDDPuMVJ6B6mD4JrFKvAEt96duq15iA2Kzqm1pzE6CRTTgiMRY6rTWjSP5QhXwfz4kGM9asVCEhGqbJw",
  "key17": "5dLYBGnP3cFhfvqVQxKgHcvXu63WHEp2YbmmRZnPMJAzjLLjUaX9jPqLJFmkBX1VXUQ71Adx1a88rChSorLVTFHf",
  "key18": "2N3MWw4oZRP1aULu7F1DXkFbYCod3JSygdtCNWCX619tbUBq6JGoE2MwzLA7npckzG9NpcWmg3gtWkjNXYgnnhst",
  "key19": "hgwfsktdMECjSrHPGh3GzPcSGv7NFSzVBJCfrjmyT34CidnfMq5Xkrmkw8rUZ5ntFV4mFKCM74o5rNTaKBLY5vV",
  "key20": "3G7jdPhMgkqLATvTYCvgBYnsUHJDyxLWvtnUZa8YSJcgPYJLxBxrKMWfrii4VeHhviZb4H6WWPVHWCkAN7fP9LmV",
  "key21": "1T33kWtRnGpHVyb46EY8oQNAb9Dhw8AWxoQgff4YSYmmcd74KJQEj7hfEpvES4dAd5FfdjoWNX8DErALaeK5YvL",
  "key22": "2ruK5yEcyvt6GUZ6iCsrNofhTCC7Lbq1cNUtcvZ5K3Dk8r2ZyTDnCEhtaMZWCgykqgQeJgTNDFtRoG4GjxYRi9BK",
  "key23": "5cLvb1EEaokxWu6Zg3yZc4EYQNVPUzQBEc9m1fdP1ojqRWBkMkDm96dK43zW3YFc5zm4AoTj4EK1c3JX6Lm8pVu2",
  "key24": "vywuHrANfi8Fyf3wqC5EyQnMCDB4HsAaQuh2qVZsPN9UyHuMNqLYWdPQ5gZRw6fzURwAuvw5YK3KmyQYdj4B2Ya",
  "key25": "61CoXS5KsRGzjBBRkikiHvPnMTENfrwHDpJH77aM6Kdac7eKxbr8DBVLFLW2PikySuScL1Dxq1Um2p8qri4P8Zba",
  "key26": "2DBwHh2ZGZXTs5BH6AE3HkGDtnMsJ2ReKmZWwYRZwyoMtQ7rPinKqhbhRSAdLTJB4GgEn8Z5hePegshyBoHhRrh9",
  "key27": "5LBD4vnN72FW55h1DF4MyQDDxHvE4EG4fFSZiK66acUwDyWWHVmVe9cbikQQpZhmpdz8ARBJftsmuYhBS5zcDALj",
  "key28": "pKPSh3h3dGNt5zEKAMuSjwmnjXVUSTJ6EANLqL2ZzCNE32gZ3LQ2xGjy98NnjYB3YG586MvFCfhedfJX9NgDbs5",
  "key29": "5FK7kMS23UHFdGzydEQyPC3hvLWBis7EEURDeSQ4NBUpSZ5SLsbFKuJNHCVchJsK5446ZjhokpQGbD9uFriXjnT6",
  "key30": "5DtrWhCrGd7hDNg5ztkehhTaTEQ8WrdAFfvvXxR7vso7K7Yg3CHGgiyHxhkYpCyeULFaTGde9hYZ9wyZPiHjEYQb",
  "key31": "4qSXpLgCV6Ww4h3xKWNgG5HmL6EhYzou6HYJQrzFMJNrLttY2fYhguwVNgYoYSfXZQzFtQZzE6WYpp2wnVWEdvpG",
  "key32": "2A61U5rPubzswV3qipZSf8mAcvYufmtnWkPPREaJLQ8qEYPPdNC1spa34KABMB3DcwhzJZ24BMBvhqWMWTuqZnXS",
  "key33": "AJUcwuynqLj5SkLwnqnHRqJvMV4pumvPDSZ33TtYUweYvQuJoD4rxEm7jQXLDkXCvfARGRUWbfE7nJNMUaLrDem",
  "key34": "3xBbrhrEnfmeESpVu881YXM9QKkqwTpLERrTZawBdCHXuiZBzhR7pTmMNDGDyz8gM2aa3j6Z2v7YF7SuMn5hawNQ",
  "key35": "4sTd2cshN4dGSHdTq4B4uhJWnDQYewMSQy5QzkKLYhvkhaXTKjfpGFwdjjEEvMaBJrh2mufVe7ZNrHkDsgDfoEaK"
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
