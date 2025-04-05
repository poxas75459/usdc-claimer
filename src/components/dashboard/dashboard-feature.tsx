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
    "3dSoJSnAdnWhogzVPuZJoMLNC5sQ546fdgaqYWkZ4DoHUFDCuXEF6SXG4LDq4sYh2tTJv6k97WnM6Uaq6CoxJnbC"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4Mvrqd5ExPkrX2DS6U9SHKp2QekVM6Nm4Y1F8uA4Ad41yDZ7kvLW5u1gkaKkrxpaCUnsHrbCoef7omY53s5BgBQV",
  "key1": "3r4JdPqTtnfpQbSPHuPfUGZ7uCVYU31YFfhzZDyDYLYnkPifRER3oxy2aeE9yzAmQnRsMdsA3R39zwm9fjNzfzWr",
  "key2": "WMt2JLZNua4U6BcVi8Rn3sPjjhspVXS7zMNjx5W35gqZajH7eTRXmpUn3NZeeJbHNvDbjYcSRS9Ys2B5aDR6iwV",
  "key3": "2XiKTPGX3uALV9kp5SMaMxdPXE66BDij1AkAEpbVtSQRCWkV5pkwyC11cGX22BJLasmkE4ZhvKppqULVpYez2fg2",
  "key4": "55fkee9tLCULXn8Sm4sWg1iN2LSYvUCbDQaozsmd18rtPaiBwAvHxuphKh4ib1r1JR4NBCuwz5rdsJvg8BfSvxJb",
  "key5": "2AkBA5j4yMPZgChq66GmXHJpD7n3TnH5K4GdRnYUbZZ6GqqtwQ9Kv4PfoH5Prk75kD8B4VmtCwYDZWQveTqPv2nd",
  "key6": "gHiyJDvrPiYKW2cmkss9N46ty43iWw6awQj2FojMH5Jzqvss2RUBmmHrP8H5qu1m8ZB8ASMr7HqykUGSTWxyokS",
  "key7": "41AncpCqzExXeGGzVcoPz5cGryKJiruzj7v1g3RJqDxToZHqtCijGbU9eF28WuU9d6SLHhLJjCMRBTYLoRk29oPG",
  "key8": "3vqT4qF4c5XehHNTtBodGQDWKPsUZQbsJN95PsdacLiGETL4FQUQWzY77AoNAF3tMMaQWsMjfD3ocyhmQztxguJh",
  "key9": "2h2ZmaZSF8BCq9T2KdPJfDTSuAvvR7CbymHqkKCbaYXB2Div7Fc37VmpdHBwEtCBWhPHrS1ShBVYQGb2PvCkkxeq",
  "key10": "5Fh71FAEwnCkZiyTq6XbVp9FkVa2FTbG6Pogqj6TuosU44uN3tR2EWukyh82i3vLY7kPSGXdf8SkAKeTtQ1Ckh3H",
  "key11": "a2xB5QUZjBKnQVs2eQMhHXArzgk2TE1gtKWFsq84w1VAgQhA1kPbi5mPbrEHd3SzcXcZuYy5YKnv5TzmTuakFQi",
  "key12": "4mEm6KaVDoYc6YYmDNRoiqnmpGsDfyADVcD4wkKEgEVahNgZ7pB2VNqHnxaUCvvgSYsvoTtZBy2uJxdKNs1kPMBC",
  "key13": "3G6W95zAkxnWtNruXrXeXHiZgsH1anvMDez15ax7Q5ZP6Wsht3HbPA2LzikHuFE3f9hL8cCkfcyEQfaYyrPyRkL4",
  "key14": "WAnVy6aRdy6v1z2isX3mki4JShQeCSgRqLPB65EeXyNdagwNePR3PW4h6waxYJM7Q9V5VW7nKv1TMafFe26FvYs",
  "key15": "2cJW71HRiFrvnkWb66VuYkwjP4ETGUmV66TFrnjSaofcrgsxjyxR9nZhnK6wfPTmib8HEjuZu3P7omcei67BWSgs",
  "key16": "AAjcT3jGCHMPDPNXA6nSJBy2NiegYt434f8fgc3AnG16EdLhiZ6Hi165W5LwnMAjjcunNdjWnYNMLC1TR7bpoGS",
  "key17": "2DCfB5dx2xC22k4LDXcoTMkqBfuS4TmkB6RAR6rTApmPnELiFcjaEg4eBajUCTwyrsagbAyJ3FUcwvzXYDNGQzi1",
  "key18": "3fCrnPPihKWNC25MiPWJEM5vg6xomJSzYZo3nUbe9CUitJW18SgrUeq7ov1a1YEd42vRsvs3SL7TjHgudWit8YaB",
  "key19": "3SJUFHuMUzPR2P36DW6o7Ky2EjBRSsDRuzXVirMuuBiAuVr2bwwJsQsLZstYnF592H5q8MmPmGPwiCoKe2QgqUEq",
  "key20": "2fvHGFzEWXVfYeQJwGYRyYu8KHiuY7PbFgYSx4Cod5npAbmZDumy4gw21GfJWxSB3KWkDNMy5mRiF1fym8nMbuPU",
  "key21": "gYAeBy99XVwTcahZS2bM9okgJigz7iVFDdHgnzQYKDhowcFB4JR69FcbHGm9sbfzQLSZizzoBw9MqG6An8curpD",
  "key22": "4uwc8uUH3XxLwJ3NULoTJ87jbpDRG3aqyeDwT4eMndAzU87C4VtQAZ197sQUiHw4MMRsW4UR1yS8Yoo4ndtxkGbi",
  "key23": "4cDdiRzf9zttwE5c12FrbonMEJfH6zrjCfh7BkrUkYxFUvCBKHgxRNzA1fwmXShKCSSuMBT5PYYVtpEWt1QKupgx",
  "key24": "74qDPvof7L8ngoV3wBWppzGsByNGuJVREjhDLDbKzMZuf2sjHow77M3yieULZNmDi5Fr8MSEUdj78AxrQU7WMmY",
  "key25": "3dXSPGq75nf7WHr2dt3p349ZXk5hSiye9xEZ8Ti64HXMCjNoQKVBk9XzSuDZhpQg3jSnzNJDc8iJzLun8RkqpNV4",
  "key26": "5u5AopN7Cfj2iTyxFq8ugagLM8ATP2WzCvoca1bWBzQDFWTt1ZU6gzH8fau8zLNP9UgVor7rqg7fN5hX7bskg9pP",
  "key27": "3dERc8bDWjQcJ32qpB7kqiUgaKaZg1MwueAVmQ2JqyEDERapYhfFHv2MaP2iyKi8aMqGAwFfSzgVpxFCvmzFckqa",
  "key28": "4NkZzXcbP5C8cJBFK66DrUPq4XyNrjmbagRHtv2B7Jfvc61B5Cba1imu4XTFuitEAADPFzLxPhgo5SPLLBU2sWMq",
  "key29": "5zAatp5kKZfb8q9LMNkjaTggmbWVUMjmCCYDrtXuNUocWAUEUxXtZBipXGrvFGTxM2r4hycyHmFpA3ge1YDNMC2T",
  "key30": "R8oXqCWzYh83aX2vVC5UTXmpXm4ezKmKSmhVNBwTg2kq7mJ7HBqeQiWXSySr4CXMyiGcr7NN4wQUo3DYdcinPT9",
  "key31": "3kixew47cEnG13g2rVnGRLAZR8MLs22hKeuymbnDaiWDmiTD8X2Npc9xehEtY96QxoKNAVY3K61rRWnrxYv1a2re",
  "key32": "2BegyehhsWEsVSyJrznRoymg53ABAKAoQF2bcp643kG5YySxr3cH7kb8EAmaWhEPidE2poznb2yPu7dg1tWgjYUA",
  "key33": "2BQ8GGQJBZckbcCAUnJXXnmFyPwwKwHao4wQreVp24iPBPZpYkLk4gFcEMnYSHT6M1NjUEb4XmMckQbNf4b9mXnZ",
  "key34": "twvUk4EtiEYL5QQxoMagRLJXGj5WcwivfMkhnoVGvaRzPbjh1AKivvYEJXRwdqk2MTZYHjmsY3MGvfFTjfzjNNg",
  "key35": "3y5S9usZJhF2G5GJEk1AqePa5GfMAH1KPsxWqtvFX7cAVErmCTqGWE4pNh3yoG1oTaBFjhqhYfU6AYdC34Bam2pA",
  "key36": "5verXmDdEJpVsZfQBKDuwjb3NpvTnqtPuMUjtx422JA7AwyBpyeKtJoooQGvypE4DHs1rFY6aRxzywfFz7AvsMvT"
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
