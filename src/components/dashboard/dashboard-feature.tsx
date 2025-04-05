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
    "4Qh5kdWgC2j4FdMduZsaSh16YbrXD2f7rWTKnHcjwKAQN3mjoq7dcxvMsb4E5qyH85mR8oVZcZmM3dU3pBkC8cJK"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "oQb7iVybg7w5kwBtFv5Mp3mhknyGysbbyZiUAMcEQvc3BdbaNcM1pukh7oNLzunXbJppyuB4sD3Q4aPef5UGUmo",
  "key1": "3z4FT5eqtLp1LUC7HCNtzgLMyrfCeB61fNb5QiQB7howTXjiBxi4Mm7bjBWKXoAp9KBYAEn4nfCXt37c8tt2k9CT",
  "key2": "5kj15UpeWMbnQWN74p3DKwQx8ih76dLP6HpeGgtgh3nQzJdvZjQdwW1bqraAcNWNGmmxsrxmiDC9povHwN35XzfX",
  "key3": "2JHR57SHonpM3EYdnE4D1qBZRAt4W9Z8xkFcwcWfDTMsRLLhBmoEonwh8oUtBU4okfac7RBr7aY4DJCrqmJcCNgH",
  "key4": "4iRjDgiCnqy3o1XpsA4rKP4552xYbFd9S8KwhvAe7EvHvrGusefbMdA72soWzmVmjcWfsDmGibYz5qQefes3qj5c",
  "key5": "4SgscSVW2XQFMHdgTYXsu1j8M4PKRj5Lac3HkYXe1xvSdq6rFE7sT6DRULjsddFM9WHftjwXuc72qucQVDxfGB2E",
  "key6": "3KuaG7tpyVx9KH4Ms5WpdN39obFzC2JaszrUDdue42nrxh7f6xbgAoFEtjq7ek7HHzaDTYo2bJALzWYrf1YKS5Ak",
  "key7": "vHwPgJsGiBn5vGyaoRryk3Ett1YhPp3xdhdQsjqHj592b63TZzECmz1wN1u6jPXxZ3ds77c2N2HjRhYcSY3VSqs",
  "key8": "4yESCGjfjhxWjZA9hmY5F8kjk4sAADxvC3J4hPKd4V2cSWRk2N98VDidxxTUB5HzNoQ4RdZidbgTNLoqADfBaJn7",
  "key9": "5TRFe8Gtq128y3wtav2EhseEMByMUG7J25MLRyg62SmHsvqv9dhLnR6w2kNzs2V3SySRNkccVBVnineWbYea544p",
  "key10": "22yRSYHaxMruwZQqyrWb6wi8EXyw3AmLiH1eX8WZQz8QrDEzXAnefNq8cC1yXZKWt6LyZ8xX9rRjYfyEKdYKPgbj",
  "key11": "5spjFcQWCSwgdNwDSrvxv2k14atC6XvfHDMsfGLHTXycUEr98igUz87AUuAk48HTWFVEeyt7Nphz3Vxpgt5g2x8k",
  "key12": "4g1EmRXkENYDzQ3JeaWNEMiFtb9AWhkTFFVebWh5b9c6T153dX1BjE9tbrVozSABfpM5E6kY9fvGSzhZzNUShqzp",
  "key13": "4LqwDu7gBjGmT1jCgnvUKGYcpxGJDJCpqDtqZAr3PqPsFL3TFqEEmngMfVQj5JxzpmiE2mddwUiq2RfywivPHpkb",
  "key14": "4nhromkUYoHYEWyQyPpYjNpJBG8M8PAhQh3VuDv1nKDLW1tELfAHDBANYfZVYJSBtGerqnkZgBP1ZvSAze6VxBGQ",
  "key15": "5td5zqpj4CNiBjsHraPu9MhRUHyTzAQ1GRipUp77ECU24EPvUJu4R3dbEi3XfCGx5kXBf44VK1SWAm8Kkm9cftpe",
  "key16": "3LBJSq8t4MV4ogyW2q3XtiJT78UYAdH6xG6kvYzHSQMhMb2V3pQpVfgJ3zUfpZy3rVWneZchXjG9ULG2VskgXzU7",
  "key17": "62mYcsPVoEk3QZLHdXG8DXyVUKtW6NPBqvEk4XcFDajFsuryP2CEVWWj8SPhmN1WRbLZsdpz6YkrLbD6xZffxqeR",
  "key18": "r7NigxTsA2BWpphKE8KHLfMh4oNfy7PeoXwLVkJiucFpzoiGy9Wz3nRZp4LPxSaoMZwApusgBn9sMZ9Tj88hJAL",
  "key19": "54mWyj7rqqMZYNdjB9RGpwNNZYSSJqJva9zsEwTiaduoEWVx9duwJ15UypdzvuaJMapskGbodGC5qYJQeucjwFuU",
  "key20": "2AVRS64qrcBBvsAy5XVZ7Wg7zknUQ4dYrE5zt2oiptuYfmxGpyHuRjWXj4r65Tpz26Q8WwXSytQHW79aadY1Co2B",
  "key21": "4oyv1YL1K5hKHTuLHhpwBJP4eB2M5Y6tEVRGvyRh5kZXDrse5rUu4Cta8o4B7iCctamN7VCJBNYoky8B7D5i9EMF",
  "key22": "5qhi85TJ4aS7mo5A8LCpnaeAQHRf4qRfNaW4n8wd1WVFYXypR2jjzEQ2rHPb7BCy9Va6EkfKrvHj4EAfokzHYNUJ",
  "key23": "5CjhBhHM5cHjbg8xJfXCoxjdG1hyLyfE4AueMcp1NjoPt1Pxbbp4FJcXemkA6DgDo6hf6Fj4S2yKCjD9W8mae427",
  "key24": "4aqVzmyg7x4SmmdffZtBiLAEvxtu1aCsh36Duk7KEah3hHuMKUUVcuzr1cKa7gEp9aZMPQXaMAcGhyS1WUFxbCpK",
  "key25": "5yh4Ksb6XvMH2irmahKZ3Ndtd4F8pu6ukEXNXtgnsGtauH2nvLZPZYWEqPX7kK8kWDiFmzuU5GjqJ7LPG9US9fF8",
  "key26": "3yg7vewz1yWkcHkvczavzo8ToiFpqZUPNmjFdLPDKzA4xs6tpLdUyAx4L2anGRGz77EAtvbLjYRLg8P9yqoLKgnH",
  "key27": "2SHYXftMzwCsjheQGyxtKYPk3ZwaAk9jQnmBFG23gkccoxceTYC5nRuKKC1Ge88o2Jf4yAWuNoF23RAwtU4zKZRM",
  "key28": "5KC4vZvTczSUTJHs73fN9UJjJBXYX48hStHqZsfxmmVu1NoKQpGWZ8RZzZ1wCy1CPoGeCXDwpsrus1S7uZxritHJ",
  "key29": "2i92fUPtR5hjwMnQF4ddciEkgCLvBkrMM1NE65xeEBAPDdPgyHHcJiywFunpZ8wCETp5msgdPv2TkK8NV3yB8hwt",
  "key30": "3wBLRsKRhReGJtC5igmsB2u7dYeXzbT8JHVZ5AcUvPcUM5wzCA866eKFD4bd2rodcJHu88dRbuc865KZs5G7ZPRY",
  "key31": "2YHkXTBQZkCPodfN1zpPjCzSAJvyU7BmEYcWvRofZJ12Buiq1PTPoN7FgSSWfvpL5yfkPebdYGSfk9Uym6MeoZ3r"
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
