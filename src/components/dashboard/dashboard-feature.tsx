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
    "m8RH4CaHiTzgZ8V11PXQGQpA7d7eTt8ofaY8ND2SUuSJL7adw7wRMUpfZPz9WtSyVzLSgvv5YGPyL2kxhGa6TRz"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "32CUnQHtVvCBXFFwExXwXYL1reK4U73JcpgHWBHD6L3B44VMpM5niWQhLqyPkHtLHNwGiNQpd6XtaZDkFVCeLfQM",
  "key1": "4oeCXtq5B59Q9kgQV77RSJ5ms9Jduajd4RnpvRf2i44uQcm8Ca65jX7WG3htM9YxjhptYKkxnpahWEpuUSRdBjTt",
  "key2": "5WthDUojmeEXaF1R3dimmFrutZtrHYeAv88iVPG7J9WYcWkDSpovGMLjFoN8PRVjmAYaP9ftmVLxt5fiW5vPL9Yt",
  "key3": "3wbYqb4LN9omBtfCvtxGEL2UKYJAkEquvf2pc9nwFKSFkWQiBKt69wgaa7sf5qtoNkvVTJQKgDoiUKpEEikmtSpW",
  "key4": "Jp2DgemUy2dkXjxEXdMBZwAJT8TQ1ft1ytq6CYahCju8m2voGi78gRLHggrZr1NPhgtzagPq6ZhZ8WSuL5FePWB",
  "key5": "Ti6gxf44kHQ1rbsRqYCMjBoobcDYBfAmUM3GVYi1rFdXb5xFoy9PitjCGdogxNgKzrnTehYsebMTS92q9TLnKfj",
  "key6": "2Cf8b2RhAR4cgQhvzSVuyKLSmykDnuBsbjYrLwsDrAwyEYx1Bc5Veu3tJAgP6xSywRVE5EMAd6gvXR1qmFowPGcV",
  "key7": "3MQy4cwJ4v39jpAyEoMfmag2sQWpfN2Bo8TmQESNt8XUo5LDS8srwMyLbGngfAvnijPFNV7vnJgpdCvHa2L9TFLM",
  "key8": "3yeC9GAESgcP6kHtDeimUT3iHAvVF7QhoQbPFmFkzY5CZsty7NReGAGxD17i4Z8c8zbP4cewxBZCaVKFRAaApH8Z",
  "key9": "4MqYT8uehoLVYm5rAsqzo9LmZXtw5tjxyx65RZF9NtpBa8ozK6S8AxZC8A6dATpKyYCKwd9Dwzed7S9oUaMHjEqY",
  "key10": "2J16rykkF18Ugvw37Asv19165b2NXr2evDxzHwCsiz5UCmsrQxbhv9hD9FkWyFSRW6c4WwAzW2GPCPpYZmA75rF",
  "key11": "52XjhDqmbN1rfRisVPyFKFvPZ4x5tcgrtxhVgW6zk5A1KRb5FcopL4aiD3Kioebaux7U5hfE5GjGZ13nF9Vami5a",
  "key12": "5RVd1WT8Qp6apZ55SLejZSYhzABhQK8Sp8iGHF2w8XgM6SyktJ3LctWmr7HsxedE3VaeKhPYRYvdkHZwFBmzugBQ",
  "key13": "4PhEJuqQhczCA7Homj2NWDqFXv36vToemMbTfx1zqeTGe97CZbjje9FcaCELS3LJagjjankJunGHgGSgcNMyyrJF",
  "key14": "5bFSakNmkpPfBgoLer7QSPm7EzeWpmEZM9msgUViG38U5ykWuLvyT1Krgp4NeBArgxwmThmwwYnK6kGyWPr8jEL3",
  "key15": "3vcKVQzjqGhUG7rFw4qhnABtDuct2okhwbnBwR4ozdDzQxmkWUaEdzcyNHtDRVb6Foo4QzudB9rpcjQ52spC1Y5u",
  "key16": "5YWSP34ds81YyMo5etYTZCuixCesvx1Yyaihiw4uoTKb7qofhGZ7zQhpvDodBPmxuCrZYfJK7MK2ZY8QsZcKdSHQ",
  "key17": "4WN3VrbXPgEWrdY28Sni2hotXKr9zQxppmHDuBYBfoTS33A2sAaX2hzu1ig92WTcPo1B5PB6McNzRbrghsPY8CDh",
  "key18": "2Z8ZNYWYZGsYVcyzoTkvZhdEvWRE3pRPiiejZf8j6CgjZnT3TnG3HANhhbm5GYCsG3deE8Usxm12GHuoZ2LxnC4s",
  "key19": "FG2CejpmJKWgjwNYutDLw4CU5yXxAB9vTFeLjqSVuN5ZGP6RHaZWgNZnMERRnoEimQoERh6AXYNdpM1MWn3sTzz",
  "key20": "3TxetjPMernw9hnXepe4mjH8fQTW5tiYiLJETTQSgiiXhe83WMDmpxAku8huQCAMocbwx7ez3nj22oPMqMTXqpCk",
  "key21": "342PuNYBikSQYv8qr34nJkhbsFuj5n72vA5K2ZmxSfayJP83GuB6jcPedV1Y74DBdyW8q3uspEMgqU1C7eUuQTjJ",
  "key22": "5KPNht2J7YCBsEKnnZFgpWFXLYCeV1WW7Ezg7EaZdxnfcxXXomX4GDjsZv273b3gAoBLwYaevgrTVWKzUBibbw97",
  "key23": "2RayvoBgS1vBuLUd2F2Rg5HbcLtoBocVfgAWLGJPrH3vQsYBmt8NQvpkFtX3YW2x17qpyEW4AyTbehMRZKP5wvy2",
  "key24": "4Sw4u74bZFLJf1kBWZytr4cNN5wfG4rvrQ4h25XBUTNBQ2U7Q1BSjiGU4BdcYi8PVBjKuji5rdbYDmBCJM4EmgSJ",
  "key25": "4GJYKdxGjAEugnL3fqJUSH5M5tA1SLAHMxfXE27Y8M6e9oPeKJES6EY3vCGEa7xiURgbNQC4Tp6YwX3FT9SCigco",
  "key26": "3HWzWGy8KR7o3iCgSp62Taz5Ht4kozA3hfDJ5UeSLfdH5z2FcM9ZqoHvJqrZdwedSmzoAQxpoYTmw3ujAtCLoSLv"
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
