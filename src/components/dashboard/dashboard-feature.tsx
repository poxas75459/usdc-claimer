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
    "njTeBeXywZ9kXfViPVSvX7fa6UgapWkpnveG3sCi3r7XyK8CVeyUVDH982gxNDoLMec2DbbozFueoZ3orkQuNhG"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2i5wZWABkX5yheXGsngp4vVFwtCw78XP9n263xh8k9F3sGiXhgHAa3YSzts8nYUkvtdXJQ7nFTZ3WuEhgmDAp4SV",
  "key1": "4xbZDMKgZyRjE95Svfky5b6VZgsUQ3S1bDNLNuxtk26NqczLBsyshxz1FCGJaQ4oNdgcchpEUWAErbp75AtXPLXX",
  "key2": "3KscLVrVXWG58mS1vm6DTLBwZ3ybW1eyYp1kcDQGGHz3cn1Yzh5TqJCAVDp9hXx3QHJoiLsgaTJKkX8Hz1ixWN4Y",
  "key3": "4g3i1PKyQGyFpA5MA6DTywYWK4oM9eEZAUnTR13GL8rvHqRNqWzThX8q1mLZDbhMeVLky8uivHgQZfeqpiq5HuDY",
  "key4": "425NBk8tHR6FhTCd6iXE6bGq3WpY4TaFvHSV9TDeXiTEeNo71gFgUtQgp2VTYWMox2RNVySV9woboRLkmjM4nzGj",
  "key5": "5auUt3bqbeJgyzHtU6cm3zPHvRhYcoafozmDVcdB1h11QWgJ6kETfnhbRmQqsyvrmjhfFaF3Ptf3c8wnp8RzeJm9",
  "key6": "vvACNREiX2mFvdykpAq8NYRuy6GonpTWrENVi176HhqpHwuVzcfsxu54Yn9msz2MYXpCMC7yqeDLiYhQB5xb6dw",
  "key7": "5UQepUAkFLZCVg54kU4RpADjEkLDKv1RQcnkpAer15CgDYt2rHNcHE9YSvudoM7NXKMF6dbtu3paG5kLN3uZ1sGb",
  "key8": "7Xr3anWpjYAZpDFtBcK1JshztXfsRnU2zNFiUwhvpJ9Y4PKKZVhTWgJ7CSQHg6pG6TfMedZXwPDQSuebi1yMUfw",
  "key9": "zNHVMtC569AMcmRcEiEgDwv6anDzXTrCsgmG9qhtMaVvHXTXLaXyw74oWbwcpLawdmRkRVZHvK1iiLL5y9Lt5Hg",
  "key10": "5jHrqGhHpendqnyQQ6555GCd1T3LD7v2MB6V12qA5hBKqqCjAfHthrs7ZGvz4RRq9t2JosKXXKNac8qrAxENrVDP",
  "key11": "4vK8eBq8UFvTjZDUCavDbZyPHaPbSWExa63oodTZZgAyvV3Q4ZrRMFF1Pw2GrBAPUDm5yz9JdCps65cLkwjsRzRk",
  "key12": "561jqyAaa3Lr9mg6dsxcAdM5CNwvG5yL96nUFSZNG5dFRCJuL7eeGYep6nKHgNUKTdifif1kffWfijbbvSgpzaJR",
  "key13": "5xiV8FGTG7sKyV5xqAwaidj96Rhj7WmXEATGWVrwiQ9up9JTJSk7q9yrmMr1AzfPFsAykMyGNdmcvV9pc3nxLphT",
  "key14": "3YKwqeNNiSCTfQ39qSUZTxL4WVTiEsdFJscrgx48pGgmAmaXfQXBowNsxhYchQEhiTqWLPtvxkHV561czx4sNWDY",
  "key15": "4YSmrf9Jb89ZV3DwHKMxNv6KEz2Fsfc31UsGoHNGWfT8rC1MZbMRDefCi8SKdj5SyDvPU2FX87qTLXEwR78Edjnj",
  "key16": "2FoBqZMoMrkReWHskyoy5rxQ1jQwc7w3KwikVeY7QwqchostWQkSZ6XCjRD2kALx4h6JHwDBjbkvLz7ouNRrcwGz",
  "key17": "53MEqFnqfhUL4VuzkFLENBZrL9zsNKK3Fzxn3QeNgc2ecJfTFNPmfon31jdsRLod2M4YwgW5BMeM3vtRAJkgfomp",
  "key18": "5D3en5sm7DdcTrnw7fgCtZrabTkjGxUfC5twNgPhZxU8KR8WpbzX6sUaqGkNyqkEkZWBqj3pXZrMFiBJmBVKFko8",
  "key19": "52pTdwqiPpVLgXbpSpgJUjYGrW4h6e9r2LgS6FrndUz9FMUinRgCwvEYS9HTETf6trFuN43jEEMLKFwALASvBGxr",
  "key20": "6SZb78zMnPqT8qVusXMqGgwmJCLeH7SWfCnH7EnFaxPCWs8XfRLigQd8Eg6n7i9offbHBnfWZr4uK9LBQ7WtSYH",
  "key21": "4EC9XPsXFrg2S1MjJp9KYf5sSoySVWnsWnCgyujLHvqmv1eY77rJAui78NCtHMSC7YXxJc78xtxebSCEse1zNXgB",
  "key22": "4a7PRLg1FNtWTUJNVeYdpmwawQ8BsJf85pgEP8fujb7swFwRuArkanhT5kFyYQHENwVZ16WX4YKHXL6gfXPX9pXE",
  "key23": "pdXYoWbbU6Mt832dk2guMZrnL2AHpX4fDSCSLNHXsnHZo9h5AKxuAQT2zRy21DaA9QK7iS4pMDb4pKQcMhufwXC",
  "key24": "Tgvx4AqYVPVjpRKia3fdj1EHVe46nScyWwToAn3o5mcJucikkzKs9EqeAMaHJCnZ5cekkBzwc5o8eE3Czf6Tumb",
  "key25": "onuXJUxavy2u9RTWx3FxDHE5osoosFsLyuw2WvAHgEaat52zeXTBf9FUysHgtFuzUYPWP6TBQcKy27Mo1CRntFx",
  "key26": "3LveR5HDVVCfGU6HM2nxsbQnahLYLUvV2L8FegpLowYHpqJYsh5bqN2K7DXpMjL2egumxKacZ1cjmU6Kv3PM58Pg",
  "key27": "mfd8QRsxqMgBtznSBLLdr9pukBBgaFCw9ih4zeMUvk5sD2EiLeYQuXE2SDvJFD7crc3Q4hcxSyE3eTjaG19Jh3z",
  "key28": "8jvre9PBP41UcGiHAor6BXdm1EQhdDYHXnzodB5hZ1Zjt24FsgkFDBjMEVZg1QRPFp9KeAdZYrAmLFhk64Jh1ZU",
  "key29": "5zuEpZ8BrbUqdX1vZUAwtiGdWC3mPX5KsEDtFjxJfYsEG8PsbkuBgdwZEACVETrbJRws13MFouoXBzaqpe8X6KtV",
  "key30": "3DdefENaD8PENQ38yEXbm6NWiDTbzqKTzVnTgqEUn1y7sG4QYgxgbNWe3tSamrpMtK13wptsEcaMoCorKL2wW1nL",
  "key31": "3utChLdbJ9Wi3686bu1hNHuLRQAGrFrdEHKWtZrLAqisGG1A55tg2gzNwURioBfyzkAs15qresy8bhGYntSiAfwf",
  "key32": "4gFHVTrLofsTcJHd3asKvnEPgHT1wZSCA42N2PHEuapMAYSc54LVWpntwvqzzYonuAEx4dQ4HNnHcjeD3JjLXd1b",
  "key33": "621rvbok3rZMfn6V1U2nY9VHHr8nF6S37vS4wtEv6Dfp6bTuXQdwhM8pjzWuUh4JtYbeDZ2TNPo6HsZNWTwJrymH",
  "key34": "3VamENseAwWB5qeMNnrLzjQ8ivx4FtSZWhFYTHiBWZJ1yYWdoFUqtdspDfCGyr44cNd4CFbV23bsqwxLdkua5dUV",
  "key35": "4EZQg5JVSDbTapWq9eXNF6MiEhK1bf61nsEgpeANRj8pMpGCQJgYkoxX3o7esKEEq4rihgGKevzddx2sJUc9KF1Z",
  "key36": "2De99fwnBFT3Xdq6F1VwreVk58EHiFFhuxrz7hzkCkPdrM4rX3RC4M3Ha1sz5NygoaV6aQUa4we16pLDqu24Gfyx",
  "key37": "3kVfjdBbfpDXerZezKtDS4ZSx8AfK5nsJ9LrMdQCNybjjdQUkXNXhLtU7PHUyx7UJSwNXC9Wuvv5W8JXgytvBDZ",
  "key38": "4Y5r8yooMsjJLXEjBUDXKy9vQXnnT8B8gVaMQpmodxLvFuhm3sv6xdcNLdJMojsg7QoHMcyAYUBxoM3UevbsY8b7",
  "key39": "p1m1nN4o3W9cSfpbvvYm89tXhhVucsFh2Phe2qbsiD3pAU3Coqd2wG6APcQ87AioGpnTzvLPwRDM4cDMa9WNpbs"
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
