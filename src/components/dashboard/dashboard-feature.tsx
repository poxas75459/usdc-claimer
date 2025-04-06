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
    "2RbE4xNGR43RhUZb1x426BMgcLKoMSk5R7Lhnm795SJXd4miqhHKswUMMJjovsahFdoLQU88MiFbvRs2LLVrKwPB"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "sB46rMyjKedLp9TdFrNwjAS3tdMBQfagwGdC1uhHm593SYugpLvYQDFtQtV7Aoj3BPA4KqJ9c8ehw9HHizcu4wS",
  "key1": "34eGgrqwssaFPH5dM63s3R1nK3rb5WsVoiB8AnoM86P72GhrhWRcZSe6iVae4HtBBkhsd8J9bdvU8RCuEgW2V8gN",
  "key2": "4CYeWcGjKbxRgckauz2w5NqL9G8mSkijEgZH7fgLBk8hk3aQRBrXytFpfeLqYPuNgeR4sLpkKKUL3rYuRqcWYSEo",
  "key3": "32NBYfKfP3Gcaa67rjB8rv1fSuY2PhuYGHKHQJ8TMALdydQU1eUf4YgDVosEqsQqKdfHcMt5bazQRyyp9Yji84JW",
  "key4": "5Jun2ToVXKVqkU3ATnsdYDBWLZ7DwRHo76Tjr1NGgmtbPFMpgdS7S9ARL2qP2E6zVan4RjSe3zA1NzqfU1q1qCDm",
  "key5": "4VK9w51TP7dt7ucVPhr27v6n5xuhVgw4hdQrpwsCUCoQv2gXrkMTENksqFzuiXqXb9mvEBSK8m1ueeh479Q7y8Ge",
  "key6": "64RJk1CYCSGY3MPnC9SxF22RhjbnHoUcKnpghjrWu554tfsBRg4D9zKemU9F6buJACGYUQbiMHWhbDNPZ2izNdj6",
  "key7": "wQUNcEx9TQspqZjyw8qgJ14v34q3EczNwiTs9uSbJkUjcD88pPYu4YFqzvwFFAjjsRXUQhYuYF7K3XHNuxHGmkT",
  "key8": "4Pmpury44hKfGQQpNfYN5eVcEo3u3wVczVWjNMnxyUoQwpLBjMyDQLnFEy9hDXH4fDvWT6i2SD9bGft28wdVbs4B",
  "key9": "2XE1uNJXH5rFxPAzEaY2JK8iQwBx9Fm9CcvpfWcJhVkx9GwP983J3E2CRH6Wbg65enQ6oHSpX3AbhHFYWuqbdcWG",
  "key10": "2GXGGAc4NXyXaGmmjCnEubEgdj7ZdUidwgic6tQSXAteaYZuzVVR8We1Q6tuQWYnjgjCVsiK6eoqWq94PJ84VuB6",
  "key11": "5nB1E2dszPWWg2NU8ZGzZ6m873nnRLk55cRho2HkNZThTq1eRUtnt822US67ddaYgmYeBWXjbKVGcNEKUZW7r2BP",
  "key12": "BnV9QEPzZdirj43kiLe8KjuAPDekpVbTYyGqiFJ3aQXEHVV1NmeJuu2URGir2oyQaeh558QBfX6ZENtPSB5gm75",
  "key13": "5i15uQrk6gFmy1guDTXY15CBpXVkNwjkZXnwcZ1KeqwBPw7GDDmMhhp8nUgXUNNJNjfNCx6hHFmLgfBxE16juHtN",
  "key14": "5RsQp3eXge1azvXgf31gXF8mnujSBh4v3ijWPF2BikiC6xjgVvqXHzYu8zZbTCnrTU958A9pw2CaBEnRqyvc6Dve",
  "key15": "62tGt7CLygS1YipnC3VxXG9kbpqwHZk2kUgAMj9kB5y7NgMvrQdqXvkpPQon2Q8W4QWB7zU2p3tVuDUrnZjfPk34",
  "key16": "38fw7ddNGz1SHR3d2USeUBmFVT7dfaPRDdVpgsSQMWkTAzNSCBFRizUKVENR2ygTfGQLcabJ1PALiQoy9RZ7NMKT",
  "key17": "52DH2XMHTjT8G6D7nevjsGT9HcU24nVmVG4GUe84ThEG3sqWSH23uWGDqG2pM9p6rSW49cfm1R6KqohPjsBA72Xn",
  "key18": "4uct7D2bn8jWp1jAvz8bRBTf7YGNsQcJfKWv4LM6mLEiQniuNDDZdvHkzrArxhShYw7iWNZiatEWUFZswuDCPH3U",
  "key19": "39oMfs4pvWtqemjGritEiMVDKhp5moYDBrUzvAc1GmGZjyXokgQMvcwbpG18V4GjH6mSQjZVBK6Lw2GdgvC1NoST",
  "key20": "4up75Qnk4wFmb64nyqN6P4wmhnXkhHj2btSG9Jh8rhwg44Vgwckq24GaHmT8B5J8EXiRgkcwxQ2fS1vydP281W2V",
  "key21": "3Uim7D8kiWEVvHC4htzB3715VHXE3nNMWqC3uJDG4pBi8YqUHwYzeVHM2c5RSZyeCs9y8cJ5HV5xeKmVZsKwo5qm",
  "key22": "bJcppp4JHAgCPm28VreEEuG1RdeByYUpgsLVjuDnFbSSUjhzQTP4HTk3Yu4yvEyeWieHyFYptoxoHdQTrHJAWkb",
  "key23": "KCPv3jPpo3LKqEQ8JHXAchdmUisNtzpUqWLkpiKEWkWWTwP27aUGtNEEepJsEUNMWozDUmTPGznb2dvGu6JmEvd",
  "key24": "2F6poSuxmpXFDfA85x3zX72XkvYE3UDC6ccJnKXNGrqBcMq4mgZkndTonQywYs7RhwK2BHB65pxsT8UdRkghzJQr",
  "key25": "2RbWdXUAzPvduJZHrLBmQh7J366AB5CFNzdQr14TWA24SzuYe3HWzL25xTrDQvQPM71d6ytGi8sMtFWyH5mjWTUu",
  "key26": "2FrEDkLgmhC4e6GpwGgCEiiC3mo7gGxmMYDA71FBLVnmwEKGjr4tgu8KbCWbB2AqRd5XbdpzFBo8FSPWhaV5wyUJ",
  "key27": "4zdNKZ6VwHSZiCYg5DGtoG2iQcP2axtvspAgGuJQ4zcKats7ttvs7q4NkWYhw4B3JmL76U9WvQyCEqiVD4Wy1Enq",
  "key28": "f5TAwaGdqzKSNXdWPAnW4j3UgmvmvDui3F48abJy5sXSCcrFx5bDkcE9sbJ8dVHF17kZ7Hpd1s2DmTsJG5gJ61Q",
  "key29": "2jwGDmbJBgHjNUwvhBLRvTfWyJasGBktpDae1JDz9p3WQ7nMQFkWPxYHC11i49vgUeE6rYWErdbHM1M5YHGFE87h",
  "key30": "44EhZx77bfvHZNNegXNhP7vUej57Eou71vdtsqc1PhqGtNZWjwo4m3GNruK3Sa1rXUuPiUJieJei4R9dHGSY1hPV",
  "key31": "ErkVgFVw3YBTXHfn5SLb9rfLABeFNkpBo7WZVMWUJyswygA61E7RXn8heop8eySwrNCozTazzbcNteUKLLquzqr",
  "key32": "2t3rSeJRHsP4ry9zCDfhkDeCRzSFAinB5obgwKCKa2ZXx4drNAsp9MxECsMGyUKhdQ2o7oFoUVjr52v8X4nX7Dsf",
  "key33": "3NXyZeRfjkkNB11n7ibKB5V32x1Ks5HaAWztpovtkHJRDTjJBzfDDuuXg3A9Kcaes5EfzwVBcNB2fHwu9TD8oZBq",
  "key34": "5pRRWUBBvb8HAseot45mTdtPp327ZLAnjP5G7dW2VHYAo3UqwVCYGbB6QQsH9382hA8nCxBj1bAjFeqWs7ebtRH7",
  "key35": "3ohKQzjstUEoDUAPebfpiWmD8cuC15G74czYSvb8qxwE37nUKan3X26D6nSXf4MeVcc4mxDkSQy7W3Ko2x6Jn7cB",
  "key36": "4u4A4MbpuxxF9mzw5Pazqxdn7iBr47fmUdjdS2umgu5D9xh2MuXhUT19fvtC9uCS2LuDc1u6CaKqYhQdBHDimdeu",
  "key37": "4iqkmiWw7AFWoQj1WRfw9SU55pnfyhDJ78artnvYrorXuoUDSmgg3VAHTVr65LBsFmRgdAyYYWvZak6X5dzCxpUy",
  "key38": "ZuanLqchPgXu2kePbYSFTGHvkZnNDDGdML4ttv3qUZcM67dY1o8GTsmwGRcRonxX6oyEo1hwCyvPbt3A8xgGgCM",
  "key39": "UBwNy5U8NVGM1YJF9ospfPgPojGaBooxLYWY6mh7LVRG7GHjhfEMy16VZv3E5sx8o1EVmyWtW4RuUzUUAJeYhGY",
  "key40": "56YcFizsmkviuKNJ4MM13CzGMwx89d6ynjkJRJyKfMcfArDroQyDt2h8hYyuvpy76yKardZr1rpPsGLwzffveerQ",
  "key41": "4BkRq8J8DxHeWqaFC2LxvTLoM7RWomVwxCLWbEGtBcc8q3fWyKxusk6T6Cj1SFASoCM1D1C1q4QaXXJFhXsKQCrf",
  "key42": "2M72q4hLBVGFBJYp98VXTKKcLa16fDtWHUaNUzsmkrwHc26FoydQBZ5oZxbe1yfcXzpet2N23KMTS1PjSmid93vv",
  "key43": "22EnAWeFsaouem1yTdET2Ld1EuVMPhr3RdRvxh9YFzG7eBTE2VF8UTKR6w8QBtJnLTgmNRYmeTHkVujpnMiWZjFD",
  "key44": "5P5SP1WceshKieJ4BR1DDnJ7VpyuaWaq3ii719Cn4RdxPAFEpKSM635wP86WrfPVR1nvhpVFXeapkfg6DcNjqskp"
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
