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
    "5gDPtEBamUEDLZgYF2S8U42sqpirnWTSXugxMNR8Vnmb2876FDTZJmunsHF87rvB6xc73V8B3dNSLttfNEKMX1q"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "wJiDtLx2AoQZ2FFK2SSkvUMhntXYzALR1EqXBc24AFf72R2Y2X1TVnqRPFgbp9Rbsca7cDy4AYNVgFXM3xbSgAN",
  "key1": "34vd7J9MFoCqm1qtxMrh4TmX7873w9boNPq3DGCPz3RuF9PapnRJcsNLnqPD6aFTaXsrNvZp2sJqmUwMoBSWN7Xf",
  "key2": "SP1GwYgAMurGhxPobnzmhaoRoUmWFsmgV2g8wAEzE4eeuGtwA4PVLz9Spiz1uUL96jBNpfCZFT6Ktu5o6VYMkkG",
  "key3": "n86ELHgLUf2cy9GkHgy7xmDwF4XUpFPjKfyCLD1a5prRz1f2xkYweFFA8sZyGrGQ9zEu7tKm2URLMM3CPBpubnd",
  "key4": "4NGxC8oUP5R2vida3cWfQi7xo9qvbCnYpebKpBwdpyhj79sBW89wGxdv51t3Qv2B9VN3sEVkmCkV5nWSmug6VUG7",
  "key5": "3RKiAnNGiVnbdcr3SbEZVEWfFhbcrczDMAsy1Jo7YFsmFqZxAB3Aqu3sKcqr3hiGxj17bqQG2MY35WyDg4Trdf4E",
  "key6": "pVr2DbwJ8CvwePcWTemPGWPSyDFiqgjqJYRpJn9NHh6BssmcjLa14DAPJCpuxVe2arfPCm1LKCrQyGhfbZCnkBq",
  "key7": "3Hv9i9gkkPTBhQHDfPjBsHaqsgV4q4ihupggARCymKexBhr2fAP6iG7s9y8gWjr9gFSK8DYWK5LoKcxpMUEjQaDz",
  "key8": "5z6TvGBa4FhQ3P6BMseEhYeDLVJUpBeb3wkGr8PbP5gSevMH5V5NeapzNu6rbCq3tw63VQ6dvCh8MuLS1ifLf4V6",
  "key9": "3FURhUn9Sx6EamPLrc4eM2dYp1gZ6yr45qvw1CEBhEgA7t64ry4J2JHwYGdjoVGuy4MNh2A1gjvAAWhHmUAiUyVj",
  "key10": "2kCL2yXr9BHkZ3K5i76K9jmXRzZe7A5TuciRssq29gp1xbbpQNH8dEHg3W4fGm7fpBHnh1sTXHm5N3sPYV3paJfp",
  "key11": "V6fUrYnDfxxsxe7zpNKRgwUsxRJiyA3ogKbkgpjbvNqzGCe591dFGYC1Cx3ZdZrtSLBnP8zb6rWbtBuSgDN4oxz",
  "key12": "2GDFjEkeUCH4Zx6ABHHEP2XdS7uwy2towMQy9MEw7U9iK3qG4xV32pnRrbJNakTqawu6JFgrbNMvw6cjzrdZxfF3",
  "key13": "372TpmHMQcGoRqxXzzxxEwEpHatNLDtHToBgRUuHBL8TjQ62j3DCkeyUVFtL3bVsYwugcf8Yg3HZEPGKoyQFAccN",
  "key14": "63SKHVn8uw5UaddZd7aFy43Rfjig11eiHVP7B6XGvsU2MHDpD17jsUeEpZPuVBrzuv5DeUBHAiGzkHgdEzBcdfPu",
  "key15": "4mZrvmMwFTVkov5qcoRfupbqqHyNUmTvxJccnRjX756KbyPkZ9eNHmFfjk2PNyiR2S3iP1LeiCWuqumAp5ZTK2ik",
  "key16": "3Lw1P6RNbffpfSL3ztx33VrNRCyKnzBNH3usSu8a4DMnRj7UJnRqPoy26vix1AsNRacWyiQ1xA8ucwT7FXGCdVx1",
  "key17": "3KRZhoeZ8nDGBPis9yYzC7y7976gk2EPcqRyR9pRJGz3qSbiTnB2zKAWfUabS5ALsmWVp5wcumUNdCf75Ty2kPe4",
  "key18": "29KXTXieBE39UuARJRqC3HBm4LgoskK64u7tGKa8eSnSNmuxppqqC523tJccUhmLi8AtmB8pBpy6QGpYh6vpoBV4",
  "key19": "5NZMfAbX3L165GQvLHbmnevsTMd6HoPC48GkdcTZwmE7RFBAL4zceE7CeR9C2kaGw8iXGgr2zzRyXBiJEAmmp3ui",
  "key20": "2jK3vtiBj7p9HBUMYoAwpnmz7ZqNe2Yqx79PvvZ3qaYCteW2cB6R4GXyCPoxwiyyPBYXU4YmKkSYQfgnnLVr6aUX",
  "key21": "58Hu4k35J9e2RDdMWdse64P3w7nMvgH8A4WkteKmZpTWeEq4WrucEs6qAbSDCzDBP37NZ4qjZ6i56avwWJoiaJwW",
  "key22": "58yaEnrJaakg1S2E66CgVHAESvunYBBXLK1rytiihhD1bEQQLeMZ2dxzfctYrXNdqMW6t8unGdsttWiKRXGNSmbt",
  "key23": "3n5K1LJPJCC5KMXL1YAswoVhaFWN9q5todWCCKcZYmJiqMKtCLnbVg7pAFYQqLxr3w9dkPBinzW3t3Vv9kJgdvc4",
  "key24": "AkR7e2mL5GWQDBEvQZZRm2RF4vVDPQ58Q8jPSWPw4xTmiTtvje1Q2KJdFR3tiYVXHTh4Lnj6jrkGGGuStcGKkVo",
  "key25": "43nCWusHiZiNUscpe7vyPPriB98iKDYGDrjZgmUvqKDk8mKghtBUd8cpsrxJmpAu97opgtkwvkw9JVJhdGfUNaJn",
  "key26": "3VMVFFWq4Z1YaKmzd8azjei7aPfNT7Q6fTnmyZg9uDLaKnTmGErJra7x6MqphiVgve7DyDQFPKfGtkW8NzLjYuKC",
  "key27": "4dHMuDFouuXrURmWpABS5uN1bTk42F1aCQ7grpamEXGGevVHgL2XNBAF8FgCTkm3V6ByL3Ttd1RWjEDFxwDGJhtA",
  "key28": "57xaJdJPcfWDMvyHZ39keRWATw33HLwacsZgQAn1FMHa316JrMMxGdEgHdoPTNgzTJr97EE9HhAZj49mcobUjw2U",
  "key29": "4yUpFCEJNirqSVmgg2QQF1KgQJMXg1KamL2XT3HTmJ9Pvvudkc792v63d3aL3gLKew4hXhSUFA1mwDdPp69EVudt",
  "key30": "5nvtfocSWqCb6mRFHsQuJvvAZ7NiTf7JNMuqspLbXLzxX7mJs11doWktVEAcayUmq2AGtMpWHshJfCUayEj94haZ",
  "key31": "2hH7p7CHcZbUUb8dzxu6RsVE9YuHbMUjA6ptQoEcqD89cXoGTneGFFphKz9x94nx5ATFCEeDQ6wfhrbSX6Xy6voT",
  "key32": "cTnvPoahsAn9nvDqx3x9LTBpCGy8cExsmW8mTUrm3AjKNQGnV3wP8QhDtZsfVKNDGRCF6hE7h8uEjPtX1ibrbtg",
  "key33": "5BuxfgG3JTVMVZENf9wfBbFJCmL7d2qkZpnuhTziwFBuUFPxHD23VPS5XcLjWW4dmvpY1fzm98MnqZX6gk82AXHv",
  "key34": "PJ1Ta3XuFHZEjGeCLrzbBFsFoKe6rnk1GZ3F2QcwLws2bgJgbyhqsTTJo741iE3L3CK57nkV2mcBMnkhDiXRHG3",
  "key35": "4mAcS5UYpPLssvcLcrGYRGsXSCGHDvMcnBrpqtacppvYEtovngqqmbBRqFxYC74ufDjUbfgnFjzqDaZpRg4e2NY7",
  "key36": "yyxczr6FK2wUK5b2dwuKn2sNzVFoDMCV5Zo4dgAopPGqWrw6AKCdCqZqH39AviSvRXQLnjGLm5KG8XpSc9mmQ1p"
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
