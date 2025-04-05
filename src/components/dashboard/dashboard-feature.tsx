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
    "3A9AfUkCDKQQnTUjvSeqMbmkamfkwj27G49YtjAgZ66dnJcxGR1gpCFZp51XxpmcW3LLAQrrspkwG2E9ecynYnNc"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4wvyy56arNcfpaSRS6BSuNTj57d2JGF78BYpQY8Huzu5DrEgGSra3xYL9MtwDHiMrrXCp8CiXj7xnjDLSay9nfMX",
  "key1": "5scrtL4daDTYTijzrkTbvGSS7LCgog5JB6zPYmM2oH5FEofgjMQ2haoLhnYSuGPCcGZ3wtXEm2uEfxBo7ZSYh9KP",
  "key2": "4iVxprzKZLrq2u5mW4gew7wk1nQQ93njqxKHB2fZbcWuNUj6iAcoRGvqzeX24hZDr1mG1KQ8MDngAi7WYioE93cP",
  "key3": "4iB3BiDwrKcNuT4siB8Mg9jbPpSTaQzZLcbswFtZGCB9NwLNxofXR5XfK4rSLQa1hTvFBb1B42tx4gnJ4aSPzGSj",
  "key4": "4733zEKS9sh1URe6rf3xjp2TzxgLW4TA3D7Qk8dN15Q59JwD7SouUcCZogDU2xWuEbpK7SWr7s7FRuL9VbKw2Bif",
  "key5": "2ZdVDvWBVTUBLHVdwfGuXrBADyJEmJQVThCVkriANx6w77sVakH2CpSrimYoxa6qv9oGbPcoCUqGHs4PRX8iaiSc",
  "key6": "5JEWoU862pCFy9GZb6hhwRU2gVPFh12tWw2E2C2tcEWodPAmY6aTYAp5tqeCbMGBYWcQVEaZmMzP4YJa7nojACfM",
  "key7": "5AVHkBfEFVRPtjqMcC9axqg4aw3pMixq4YauzkGhXwp7BAijQWnu2s6LshhXUcA67h7G4r8Zn5ysU4PpfaxrzUhG",
  "key8": "34XHoYANykHu9cxzA6ufVPe3Q97KpBYgrjKao2zjPf258VSLq3icGRrKvuo1MoEoVupmubE6pHm4rjUUvZS5EpVg",
  "key9": "4KerWduX1jjvuzMKShNpgXuLC11g2RjrkfNNDhq5SPhxBpEHmZcQvLLdLaPxTeB637Wr2RMUNz1aHd8uwRowDt4R",
  "key10": "3jU8oRZLpfeZV4oyhAuYr5czCN7137fLJ91kYTpyLzxVV2PNuXBLiRCFcRicrjTQF9C1qL13wPGdh2u3bi8tpXRs",
  "key11": "3aLEYN7VD5afwpm1VdZYGAwPgkvtwgvkFY4uuAwPYrnz7n33gyLUd8vf5rradTWpfkyrs5kdjgQKGTzrLmU7RP2Q",
  "key12": "2sME3NHRzfsr9N8QgHXcr9ZUNhwA1as8F9Dn5pPQzrFaGB53jAHGZpmM3Nt1SC4GDdYxyMMWN5L3pgJVGjREmbkV",
  "key13": "4UZzKtvqA97rTmpD5fdS39z2Cvh1iL5k8CkW7Ne1SZ4gGmkW7qo1GwHGGC5mM1c8pWwCTPu3TSmqerT5wENQ4Cfd",
  "key14": "2ZUujtYenXoUBBPCAFFPS5mkBJKG3uqB5nfXZypoRjg8Rqxu7FoH1AFBdnocRSt73toyU4mdSkkSdP5zHzxNLekk",
  "key15": "2mauZsfCqoPQ3FLgwWg2G7WfN2rywThKDUjVverhZy25xAmsKpx9mZMq39k5XSmy3muTu19gJsfu5sqBWdXq2c1f",
  "key16": "4YcRenCnAEUc1Zaui7SxukTEZ4Y4LTFuFXPAxjTgi4YLS7ke9y1vjRGKxeberNsrFkUdrGAJdjYjagjqngbftj5p",
  "key17": "5dyh3Bgjd24tpMLyJVuL1DcQV9na4j6Hp8QJ3R95QVqUW4VCSvqeKuc3R5tjVBZtQSXjCFvsBun7kr8UXTGu7gUA",
  "key18": "5pii38nDceRMVx6GxdY5mKwfBbugPzLzd9fotYAHP2ZofZoeJzjQ9XEFTkmKM5GRUQKN4cR6veZWyhu17PFpjPX",
  "key19": "3PJixW3caoF4sHdjHgca3gVe7wDkrgyGjz2PdYfyBCr7FKHXRjiSBFyac72VQDHwP6asRn7x4GkAS9fcBQbXcdrt",
  "key20": "2ZeweemHfvL88NavuvoEwFxGiSyChv9rLmWr73odhiqCSi1GyEhyhkXXtEdfeqQRbQqjtomjgP6enZgbzx3TTXSR",
  "key21": "2XHafGusQMnjX1extP8soXvxfL5zsosW4XLJgUShSXRBMAHUvsCHTUQA3UGQYS7BxEHy6gfWFi8FuXhWhhfaSdtC",
  "key22": "4aQag7R5zJQRMrCYp4KgpV5sxMShBHXR8deiB59EFq658t1wkD5Dtz5qfWbDqxr3dPiJd6tchikpVzBaRZAeBtH2",
  "key23": "wCrye5mwcoeHi3UtSNRaVXm1RSq1ctM8FFJPmxq1qyr2psqHFvuFVNV1drcXLMQznPsmsQxMBz68pGTBUfBVEy7",
  "key24": "2FyFduKcYKbsKHthcGJAAaWwiHHRGCf3P8PyoVL6kHnM36myyz98UueGpDB6tH2yKdDqArivtbnktPAPoTnyWdcC",
  "key25": "d1bEx5ueYsQf9vK4YM7VkqVzkdtFm1zydkWmbscAQ42woZuZqhBB4yYAcqKhWg9AaCbxhabNAYD8QeByqdmKAXh",
  "key26": "3CHcCgnYffQXKxCWzP1NrwHvSxv1k62KmKfXEEiqZpPDp85ygvzixPnCZM4iQe4yawjiUfZvDfbYbRNAJSfVS8dn",
  "key27": "4BYsAf81MkiTKkfM7UPTsPgTs6X2GWyjoetAnp9V6mcdKTXe8HNKoWWX2ZZBYLxZgQ948ha4QB3mAMzDZDr85G7X",
  "key28": "2BCNevqDvks52CWZfUSz3c8gzAg9L8F95NfsdpK5DaqyMEYYeU7Mo7gvC5P2ggLrsWWcFshaCKLyFNXFCwQNFZoj",
  "key29": "4PAuLwjFkHaNa8soPFsd3Jid5aNqDzNuAYKfFLwSvVNAztytVNQuGJG9DbXLxTk1Za7qFikAwchLmj9qn97iXJhA",
  "key30": "5P5nmGEGP6VLGyNEPZgdL1SFELNE3boh7b9ki2WhS5ToQYitANGjbNeyTigSLuGdSFAYAm4jF1vGS89NTHHRZ3z8",
  "key31": "38ti7Sh4hWsp3WmTRtbM23J5SyqRiB5TMyekPsX4MfLNiyzMQpzBzQ5tpo4fkEhq5GsSRGn8tAvkiwZjZ6AxG8hd",
  "key32": "5PNL5KaQ7JVYZTQ2htxXSshHJ667AsSBYw82M9CGB4hKPRhbfad9srnEJhQ3Z3TZV5H3Q5Y1Y2qADCaxH7ZxK44T",
  "key33": "24n58hBGUp2pFEPMa8uTbNE8KbknotWTJeqaQFhPF6rxJdyhZtdqTJT8kpPFgQodFPaSvYTnnFuxZAjQo1fK19yo",
  "key34": "YqyM3zBaVb6CavebqgqYLsNUELrw99nxVako6hveQFyrejdpws3CqjKRZbw8Ui1PCmH5WWRrywDfBbBTudyFT1Z",
  "key35": "3J7BYsYLzS8TWgD5Be1uSHaJFbxkBmgHgV67DLt51kSk9b8LK36cNk5pkhEHpBJM4kL7tJZY2UyW1RMTpwxuWPua",
  "key36": "5iakny8FTAvpBnJKbuUsZWRooGmea4UzVbKzqw2AuiZtfY1xMUzEAbbNabqmSdrNMhBXyaqtzRwKQnrhiteGjcAi",
  "key37": "3i9UZifRyR7jPxkBY83ZoTFHe9Ui5HJR6Qq5LZKpqXvkM2hg2vA7JnBV2h2TmciHNYZMFDfYfiheK7JGRtaDWdYZ",
  "key38": "5b133gkvbDg3MWzixKxt1LZ5NYGdZjcrrLyD3pDKTcQUupWobHrp7drLy3Z1b41UVP8t8pN8CJerFPtQ27PX1iFZ"
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
