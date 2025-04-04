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
    "598wwZbpAUHXdxNnwtQaSw4aEnbtJ3BUCHRst3HWNSLg6nH7PqKH8rHFYv7XUiapNnBgV2xBcUFff4XDt3ZEcEaa"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5BryWBWMrFiH12aYDfQWuSuZQcZKXruhrcvsuoP6zrXNzm3hVmg658KK5pAeeCLGAK1tC84yztyb9bfPieaykLNX",
  "key1": "5WUqvj2QV5M6DcKs8Twhf7xkdYXHfEVpyJj8M3XAZsmhzxJETsLg2FMJtmMAakHGD8LJEP9Zbu3i2T265j2Q4546",
  "key2": "592Mi3yoF6zGk7uoaPUWRX1YLHXg1FGvNYkKFg5upVsFsvFktU55gaC8wNDMyovBQC7wfsVNVWKhSb4o56GfPFbW",
  "key3": "HdHGmfnscqYL5ySrjZouG9apREwZEyy8rdjhh2a3Gou7uUpFJo2J8wxfvXWFa6nQoziUzCWiSqiFrh4wv2UJCui",
  "key4": "2XCf7r9EnVBSUUs7u3yxEdNWqyK9DWFfz9hJNpc8qbdLWKVcCyN6KymsxxAwWgc43niwQ6guGUBZ2mR5BwE13QTV",
  "key5": "vnpeoeEUBTTZW6xhXNYpakkK67YkQo412i7qL4npe5tUEmc8iinHUFGmSgujfeMPgVbCUGrVgEveaeJ7jcEBG7B",
  "key6": "3uhkRFdnLVqPuNDi4BSLZbqu2t3ekXMvUVGttGbXNYUC6USKfh4pSqtNzWyasHB3tWZ4XJBGiX12hnRZBYpVtEaD",
  "key7": "5hebGjRq4XuZXuJQr978vpfkUjTfefYWYvXDcaVPHxEYjUjMQDug8YfZPQAmY5qdgZxrQ4BPfF4TafdYRd6kkjCx",
  "key8": "hkJVqgWTtH47YYhbkLSnExKcfoJfYEs4ohFe89gtbiyDxErtY2kXNQy9fVGqLhCfTcyRYtpheZE3o4zWsbc3SBG",
  "key9": "2tMoX439NuQQC9DLXJs23EjuPQBBGzxNv5UqAgqsi6FnU1N2vYsLPvks7VJEwno4D4UfJ44iD7K8w4frc3Xs4rD8",
  "key10": "3uZ3BJiyfYcn4vkfFty3ew1h1HXysdAxZhmVxFo93nssc4yM2bgiUAEq98UxyRF5ud2i7xwQnpVBYNbMgEayy5L4",
  "key11": "46ZvTRwwmuhvvzDxpa4nN2kHCH69qmWgjhudubRnXP4HSRG4sbvofjdkXgxMHBXJ3H4ZgYJm7hD887BquL87mMHo",
  "key12": "2wavHBWrNGQjnsUsBrA44nY6zJbeYBGVJNUnTZW3p2iafQNDdmKNiyPLfdU3aKSKZHGEJxVMMeBMmogKWeHn9LKK",
  "key13": "3SoworymU5CoEJMPXB3YrJDxnzKgWTr35532JJbDEUUjwef9gRGnpmQieDaktvpZsq4BNvJcm99qmtctdQedGKiw",
  "key14": "2HZqEZFb2V9Yi6C3dfEAkgVpZHbTAqFP2Nm7DJgoxVAgW4bAnhQcW6y2rxwYtAQz5Hbu6PJA33zND2aTG3Ggecfv",
  "key15": "2f2gtF6YFPsa8gn8X7LwH8X6JcMHS9bRo6MapF7vH4SsURR2Pcr5x1ZxQzh6iQqj9Z8vuUF7VEvop8VzBw7reKtQ",
  "key16": "4W4qwv279qCiKcwx1VoqfKHH9CNQXqppLyJ3bK18cFBKm6F3hMpy6YwoHYxMQLELU5YmWtEMD7ePQeLvssHVYXfU",
  "key17": "5QdS4ZLD8fPmXChdDUmbMmVgFEvna2VB89KHBWX1gia4UdgCvqtszkpcYuTpkAF96PYhEaghira6kqvPmX8696Va",
  "key18": "33kfSmquTqCKPhgbhsLbtdZ952cNzeth94bBfaqHSNrKoazaonfPsNRU2R6nx1GtDdcu6XPeHB8CoBf6vExfoX3v",
  "key19": "2CmoBfiTmxzK7uQxryQRRqpWVg5d5hEgvWCV3TuTevoLsxMSnPcjiqsq2CyGwxQnPDiWoFDcJySiMuyQRMRTBKP5",
  "key20": "vMRNsoFnZMsSfrAh7rB9ket5H9pfQnvH3jam9ADjKGthq7CMB6z3a6RcMdbGk9y6Btj7ViGYF2tEVV77VLdzch1",
  "key21": "3dfb7jVG4jFYhBrgXZvWLQKMRT4hFjuGEKEGd1dYvrNfykxrVmPv1kFcgQCCsQmeRY6Ntdzt44zNS481CRBrwQV1",
  "key22": "2oyscykVekQF9Trcind3WnoKTX1NDreCTmS5JAqaFNqEZGqo53BGmB46VG1xobBdKvMZ9cpAa25EBdfQfxdjW9fL",
  "key23": "2HaqY9C1oMVPKqpCnBibNszq4RzcaFocvSbV1t7isQ8UWjxpwiEY7nyuwBzg2qs7SwKu9MxUWFhivfkzsqRNWd2X",
  "key24": "TV9yGg8cpSVaRaQJMHRqSLU5ucgGqTPnSMfzess5c6EXuPECDV6DNX2FYbKCDN7VDFCUWANpnBuaJo6NYHtXZrW",
  "key25": "NrM3gH9ouJAe9hX9FicJg8mApTprBTZVtAYSdXGAdzR7cmMpViWcHjpr55waG6wzJDAF6W6j793dKCkJwRjqfX3",
  "key26": "5muoPRk29qjH9pFeN7L1wzdB3uoCVfyVQwNPo9SjyVbUogrpdfpV232bJk2QXRFGtzMTbhU4zZw9NJx9DZ1JC8qL",
  "key27": "3uKtEYyNXsj3cWvNZcW85LFT645ZKd7xtheb1AGTRon5Q5SMbPyHAi7fJbUZgsGcLxv8TSg8jAUHQf9m7KXQ9Rbd",
  "key28": "BXGEQqrva36c1w81Pw8kKJvKEHSKCezGj18N86rLJeXDBZz4aZhGWBX9CHerQW3KC9ZP7tSLrPvYP2agDMPH59P",
  "key29": "3dybhuJooVEbK5gkJPW2FczYmFKqNq6Bn7rR7zeZ9Q3AVueoWYSzQNm6Z3NbPyeYmDnVC9RK9cMAkFxqMQNyTn4m",
  "key30": "4uXM2GysdFAht3mdY4abaewhxXpoFkBbbnzdhpAt3uUAyBG9RmaUWYw7E2qiZdEvJ4mjKMeVx3LXQbkV7traxRg7",
  "key31": "3Yi3gmZyaVfw57topKgz8AuaZPjYJC9Dsm9uyuyN2rC8LmWCPces5DEfUhrgBgcaRAKdE5YvEySkfGSqKzBBYsAr",
  "key32": "4vfPkQ5VzZBQJ5goAaxBfgSTiXdvrweJhyp6esYWoUwD3SA9APEmSb6bqZDB9GVBFigbmvu3e4rJtuzBXcjRm67b",
  "key33": "5q5eBV52fFVKXzzSWaA6gN37DpeDcr9kVQ4vkRTUxDZUKuAQqufPzQcFySsAjPXG1rdDaUNqjQWRrugDKqCAqYY4",
  "key34": "3zfEnNpnW99DQp5R6k3zZ4kPudsjRyPKQuynQUwp9WNEJTexjEdhy9aFHCcvPX6c5CTQcN8dr1nX6Jhe1MtbT3gr",
  "key35": "4uKA74tZFHYzsqmnKqZt8B2JZ9rpxBSn5TAQUwpPrHc6NxudjZTrJoq6jmBxu4ah7jgSB7UHKwdxcdv6C68j6dys",
  "key36": "3aP3QSjGkg7Sbe9XiuzNRkXG7qs1JJbMcpL8Qrx7f7dd65FUTrK3Mcu6GZC7w2G1wvtAENLSxYwQujfCTJWXoFfe",
  "key37": "mqe6UuaPhpxm588MthpUBnviPMdASi34JGQhxfrm7d5RCok8yLDLjt2AAZfVPdP2jLD66RMQmzQHZreeYUxH3Yi",
  "key38": "25m4JEHR9zs9Czcsia86xe7egZDDfvjKu1Tru7X3PL8hHrScvCc42FuZ9k3v6es4sNKrECtqmTsxtPdRCtW6AUYu",
  "key39": "3eCApm5V2NuV323HNTjs1i2LGnJGhzZfz91u1G8dhCrhsTfaKvoxhDnQFPnKprnqj1qGcPS4qZHBiAEScSHHdCQ5",
  "key40": "2cppy4aKBSdvBa2Gx92qGmDZYujPeDtan4X2xC3UX1oRoNynSM1pLE9mo8hLQt8Gu9wVvLc1eDGTiaRQ8mrFgV4V",
  "key41": "rw2MTCBn6GGS27grvdynw1pVXSTAsDQMs4UJfYDGGuMphGJiqdEKqhmwSV8cpU7v4iZf1vPenNU5ifjKpjf5ozZ"
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
