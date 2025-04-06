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
    "4areSXfyTH2CrCCkHDKUuD59iWtk9y255pza22Hi1ScgGLhjdEn3Dq2thcHRpj3E7MpNuavM8j2b2mEpqKjU1qQt"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4Wx7dyK61uH5aKzAPoaCAYVPH5fd3MmPcDs673h2vRCYpkScuLXPcgtV3UyijejTqbmuRzaBP21oXGcm9wzdhpra",
  "key1": "5rjYAC2YR6mVVEep1U2PeaZEWvLCMaxe16rXY38z2n8tju78nNaQb8EzWJvJ8ukc4WirzGnNFdBEKdwZrY4g7QxS",
  "key2": "Ns5wYjhZd61sphvvuawx7tbBBWU55p5sPmGhXEHS9LKiFEdQ9w6jSSphei3javkyaGmQk3YK2fF5a8YPtR9F8h5",
  "key3": "3Rkfh5jPeFRPU6L1MzmozPCZXphCy894v46Za1hRhR6eiXhv549JtvTYBcc2yCAQKvqVMtXmKkTBb1GGBc2Fx1RV",
  "key4": "5KKafgvZ1Ws5u2Wjw54RSq9FvVfPfpPzxqDHCE7kUc2rBDx1gsYmmFim9m7gJTocb5jyB8RevFKSCEnuhaejTwhg",
  "key5": "621YMHLThAkTMCDzAHuuzsAFAe33HGiPtRLukbHPfdeKoPeQ3w7nSkueUEJdDcSP36X8s9QBqQbkMcz5PSr9rHQs",
  "key6": "226QVZerAXicsaLPBPUaAVwqjKXUggDg1WWKcB5TvqHRoqGK1253jorhaz8N33TNebCQwBV8foGJCBWcRAorGyTQ",
  "key7": "5wBhGP5NeLmajpe81awWWcGjfGG8B4NrKgpJryq88VA3sUjUG3btLFe3hU4H2K1KkgPT8n3xF43RMHftvhYxYxT",
  "key8": "2WrfjSQNabV1WqRs55Q8ziBrSjNpkYfAbTJbvjLtBQTAUGD9fvgabHDCAast9VYQGXZjTxQte8VPtuxJzE1wmTRM",
  "key9": "3McVXcSBqrkw23YvDJhTHz1acTvfLK9157gZA41zD1oze5uCHiq3eUM4jTACSSY8rEjiS7yvGi5uu3c8hxCECspS",
  "key10": "55fGn5RofpBu4kHPU6RNDZocZeBBzbBvnSMKoTMjWc7Pb6rwbfBokyjeBVVHUbkweq3tLab2NpZTnBTxCUD6NQG3",
  "key11": "3drB6tTtnFikfSc9JrVPMbmFH7UjgAjoVFjYtS1AGqfxjKv5eQf6PAcSs2JTWcCwU3jAmdnWXYqC7wp38bqi3To9",
  "key12": "2nwkztQkyMjfQpBCud5JhbKqR1fg4m85R56D46MgZw7HSrcJNgkQkReNprJPCdaapudyyo4iTPbh5UMaS8DU4Cat",
  "key13": "4HdbxZWH9VdknFopUHHDXXr1VpJkLCmP7WhwGzngXBPJpJz6EyjEWrAgPfo3QWLjQdzc2XzhNh7JMkAVJ24toki5",
  "key14": "4VQ4CZF8ZqxnaskAzcWj4aVnDobGtxN6dB7DGX7sZwCf3C9s8Hm88oSWNhJv8LSXMkTux7t1vYjtc8Qa5ETyWoLx",
  "key15": "zy6bA7UopSgJ3xKBekaLRX1a9kjvLRpqANM7m3rpAvMDHLeStZXykbAoXBKRr2h57oL3P6x8NBXmfMU4xgzStJU",
  "key16": "4tfM1cWnWPEFNAZciFDywSAetDQjadfFygGzDQFW4GqetQU52gkWxHHFnrHbu1BfKSVbidEKKEMYMvTERhULc32r",
  "key17": "e1ZB56F68C9JNspjTNN9kWhaw4oTTNUdLxXpQU2fG76kkBhDuYRQPZLNfKVi8fxN6pGPA2gAmvZkn2B3ua7p361",
  "key18": "49BtayW7NcwLA84cedJd1Wsp34sH3Cyxz8WDUSA8mAxhSQpHh9U4zKYzcTJVyx11Y9HACxSS11Gsq4bmYabRgpdp",
  "key19": "5sFqJLztkokSHwPuzECffgrdcqFzxAtNAp7xQWeNB9LfqoD96PD2w3mN6ABhVqHXD8iVBErKG8hSVGdUm243BKQ5",
  "key20": "n8ZR7vGbYWW33RF2QReHhk91dSAKRhE7XpvT7v2FYp9T7L2DbdS4nkK2RD65h7qRpcMhyCzia3bhf4FPuUv2S3R",
  "key21": "4vTrw1nszNgDHBQrKfVf9nXGpJmRM3x26itPBQsEUNMXcaMf551XL5eo82CG86JZSiaLHuYm9xLU4pVToseLAx4R",
  "key22": "tGj894gmxGq4BDfZvdWSVYGcwdcrNHa5T6QGSMgCqpwSXXVm7sQgr3c2sAMSobY74oCz8sSkgfVKScxB7hMj7No",
  "key23": "3xvbCt8xQ7HfEwsQCJvnxf737CRbb3X6ojmezReoheR3ikmy3FETCTnc5f5nVF2zRfuWXoT2MJAvKNzkX41pvazH",
  "key24": "2F2uVKb656THbDSWFqu47pMCDLyGyvu9qb5ajhwPK3AAno7zREgYGAw2shQQEUfPzkcPffLtpZfYh39DpDD6MyBp",
  "key25": "2VpeAFPkyhzXkAdWFWazjoTL6c2LRq6GRL86A3dSqkExD6HakHHaz4iAURmPiPQqrNS2Vbja9LKqX2dJjybvmCti",
  "key26": "5dJn5sir877p3ALjhE3oJBwF4HmZtaCh8n8QL8DwipZTt6ey9GKVGaurQKUTxBnJ5wVQWkkHnF7D3VoXHVQxgMBZ",
  "key27": "2toVUt9SPcYdi9gqscwvHCH2kSavbvzTGFGwyHDB6bbpueQ4t9LQDXb3v9DF7pRXkd9uFfVN3fVtH4DCQBxHvj57",
  "key28": "R7UPFXyX9qenzHJ7fQPx1JaArL5yDYtnfdS3s5j8kVcqCSQL2vJfWLbp9THk9vzrTo3Yn1mjDBeAF1UFFVcUKdM",
  "key29": "2F8jwuhR4q1itQuV4raJn9HfSEypqTnN7vaHfGvQut8Jz5A8pMZXD7eJoEU7ucr7wkhu6hM69dVYkRWnpePZMUgi",
  "key30": "5U6aWYAz9wYwgCyax3CBerzYaDpeYSHbGuMiUeQ65NdWoHhVPziBHRHUq48NoWW99ShWSuYGbwQwzXbac772KHjn",
  "key31": "4BiNLnDiqYfwMQjUbLdLyLVSrmeEdKJEbC9fsJrQo3KenoV37fspkiUdYb2oC1nt8ojemFhMwVmaWYacM5d43tSa",
  "key32": "2YjxQzLAwxk5HTBK1Z7EYF2bvqBpcESKwgq7VdbQbtTiJYGiRRTyZi1XYT4Km5c4rihvNZrDxjS5HazzdPV84BqL",
  "key33": "5s3rw1zfiwpxJtXUNa4jMWr6D3r7Phg1P6xRP73snzt9TqrtPrmRKbSpRuY5NGhKtRbyFXrBBbu2UjyG4PsvAwWM",
  "key34": "4vnAwF9diyFDBUcKdgzg8QrBruvwpXw1bststp2RgEjUfCCLkihX3DWMHzvCEPZV949Ecz1GxuGCmzca7kUTmzAN",
  "key35": "5hNG7p7HPE3w8g8hFfpgki48KcJoXxdxR6UFzhQwQHc9vS5keGjxb8FhmCeSruSf9PwtSHNXstghRQy13QA4YPgL",
  "key36": "5ebqG2P3ipHVgHupspwRdcgkwSpi5FAUzbjr3dLoV2cCGNNPMATbzp3Qrc9zxt72QgWhonFeHWWMB7xiX85pTTae"
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
