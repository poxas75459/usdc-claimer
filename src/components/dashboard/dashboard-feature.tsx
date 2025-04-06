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
    "4VegCv6BmQUTseGX2jwHD22MeZBaycPCp3QcdmMuRqTZmUFASV6kBv9yncErN33AyhLsWzW4pqRnQaoFgrDTZ71i"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "iU2N3HNxnWS9Sx5QePTnbmudzahBXEa1fMKTh3hUN3TMZ6b9HZVS6PzoS6KC2CdGcoZNJBfjxiw5G2Nc3GWnHft",
  "key1": "3uJ6bth73S8d4dA4DYi6ipTtuFyX2uLj14PstSAQjCRb5D7XMkx3Nm89yxy1nevbz35mMigrQDSyP5PxCNh66vcN",
  "key2": "3A7DeoTDn2DrShCVAkf4rRQHLhVNpzRzwQfBgQPeb2D1ps6DmmcDco2rWtMAxc8ntVVk3267qeaUPhgEPXsp4nVn",
  "key3": "ahQoLegq28QwGBqfRXdMCzAaUrcr1SBVjpzaRCrH6NxdvYyQJq45YWqFrWgXpagKFm6ayUpupkVSaCMSvTPXWy6",
  "key4": "3fLGnU7DTD4FmPAe6xehpZ8FCmRutf8mg5WVnGhud2qn5zB5LEXCXLywSMVPYNM5azPkrCk497YLzFrnS2BQFxUv",
  "key5": "4DCUuVMB6mMkRXhcAqyf64ANqZ6bTpVou9rwF8a4ojAfxqbCqqfE9uHzZnpLJecLWm4T5uJ4T1pia2M7WMWHgzJn",
  "key6": "3vaVxGpzdkVzDqhQigXhJFeKjo2ANnDHiSaSnxqDBrATZzUHwg6cfNmhs5NmkXuaZrLzPtUQXoycB6UEspM76pxx",
  "key7": "63hRoo69nuRM6NFnkGQQenSngooiz2gHdeSvWFEk3kv1LR3xA8qsf93vSLnCmrRQVyveujRg5p3BkaptHUFSKZfw",
  "key8": "4eFohmZRHxCaZWHXEpG9gsgFurN7thrAkMKfwFFm5DKMf2LNBW1FtiFNW2M7PgFTjNTmgSin5Xq9NsMtSBML1Aip",
  "key9": "2ASNzVdQotjxWzgmi9ECvUkmHzEtvmJCsnCGMb4AjoxMRkp9NHS8Cx3bfkF1yJcp4NLW2pH3LzDoKnkfWihMymSv",
  "key10": "24vyBXeoa5xQAKAoTCLxHiBr83CLDuoCuTehB2uu2WLwrUACpri9gLDpoT3s57wTWFUj82riiPhkXjV6sxZwqCNJ",
  "key11": "4NXHP3GfCSsZrJGyXpr7HePW32u5NXMFXfysfzBCmnSTQDnzGv3kMrseijYP35Vx78H5Xzd8KKrPrTi4bfB6nZJ2",
  "key12": "P9XNjyx4RUf8Hg9xUHSXkpuHSbTXyEVEmgybdXXVXRcPmW5ksJ4Bsra2kTjaFjpg6v9yqRGPYPuf9W7jf71g3My",
  "key13": "53vFzC1LKeoMptD7AtHmixrxJBu1ex3up9irDUJch6KuBTytQ6WgZ6ieP8sqcTArWDC5YN8ds34nQAYPtJeWx68t",
  "key14": "JnrCTNrbYteSZ9oiG9Kc16mwWa5JrdzqERPc3Jh6gqiMKeYvAc5DtSxKRCd32X1srcr6RT7mmsKLAyaCijsmNGZ",
  "key15": "4WAz4C3amLMxYpdYHwAKJjan4ct1u5npphnWbJE3dsL9Pyw5wuudXEzrT6q6HJxM8zxiL8kw7FXuAqdDuUVLrUiA",
  "key16": "3rJUfhXUqJmWnn1Q18Nno8vq9xLg3t4UhxCVjdi1iFvToe7ySANSVuzydm7DfazPNdPed4aBjFCWa9eGZcmFmEpN",
  "key17": "54QSAjQrmrYUTHohBC2cTsF1S8wYmcYixqtpcSKfdDpswcD8GcX6xELXHiKDa3Vcoj1Nny86cfZNt1hMTQ7Jx9Ki",
  "key18": "2o1ubYW5u2XYsUUezZHaeXPsW897o6HKoQvcPDDkMwvDiwFrfwb4rFAAgThtZxhmbtQshBy29k6AWGgXcEouXVzN",
  "key19": "6yMFuG1QFvoA3YQYPjYoW2UHYd11d9TabDdjkXEszBj7rEDGXsLhfErjPZZ49UJ35VBwziBKkN9N3qWpbEV2F9F",
  "key20": "5wUBi5UgTFTYDvW8GYngLQx4LAMmNXpPMBbMABGdmDczW8yV5FJVCcpXvPmbC1SMHXD4okTiAYsJDy5nmxLHkFGp",
  "key21": "3FAxYj4rVKQBwLLY9JXG4QojpU8cGHKnmu6KivNx7iRQJgvzMpE9Rm29WiakD3z3njuaFNbGLGYR29Utz4WLzAca",
  "key22": "4kGm5ddG73t6wwm1LvNgwrbL8HSHWkY99UJYNn1QaaMiSEtmQmJEPQayeakMWvsSCWxJyRA44ca5WjZLniAPrSfG",
  "key23": "iqaKDWmKAEKbLesgDd63NewYbZM1rZg3UQGZnj4FNN9LowQv8YZzmoanH2oHXKUjMh56VU3JUCsGKjAVfTZuWfh",
  "key24": "3WgU2soY1vjSvSXtcqH5s5yLg3r5RYGFnSyeUJkq82WtjqzmFadBu7PePUKFmAjFRhEjv5xtrbmK6GdnMraTKMtt",
  "key25": "4QvRqzt1M8aGe8uosp4KiijdhcsK1RfVUjHdSTjsELM7Tju9NPsDZKyVDvSzj6ZwRiLcy3LaUjunboEarNpnNoiN",
  "key26": "21YriC9ADsD1B6CRbSn3RQSemV72UybzvQbdFtzkhTaXTPwJugH4m8wRfWkPV2DyfdD874pWdw2pchcvZyCnZYtr",
  "key27": "tqe57ttJE3AGtpF8M3ZCPQvspZvmxswKjxx3jbMS9ADrpCGbXanSHXBGEFbitrmFt1LjfNMwfhdpEe2dkVs8PYo",
  "key28": "2Ti2AiGY5Byh7NoVRgq1xhuToQQGZcmkZX7MYxVzXBYdhDgZr9CuxiqXsVaxBK2W36NHYZ6ugZbefJxoggTJ9E8u",
  "key29": "4t5hWeizGpVh8ksBW64yB4TWptuSXQN88CBaY7whhbPiDJjwxssP9V5s8NkA9tormFjnijNFXJc5ZmhH9AQWFDW7",
  "key30": "SWbgXakuzoutvhLbdKs3iFyjJyEjBNM9gtqXx9DZRBcVE6QJBuda6RXfNMbWmv8v8zrPm57eQtcSirNdxmk93GN",
  "key31": "37hjKutihQnR6wucZKFHPx1Q2VniAKTf9Nbnbyr65CYKjyndYhxP6aQbQfWYGCN5NBXPue7U6jNns5pEexzRkuHz"
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
