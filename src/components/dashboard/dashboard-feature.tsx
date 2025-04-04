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
    "4PvN2JVxAb3Pt6Ezpn59KrTF9kmT7DqHsHedSezXgFiEFoWxaDbygt2EHZ7paMxDaWkDdeemjBG7NM18mJZPgyXg"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4nqaHV6ECxeRraMfTXLFexCdPZ9wxrKBUogRuoM78njgtzkJUHD5c1ZF52qJ3tB2a2GLwu7cKaAMKziBQ7QTUqgP",
  "key1": "URcrcviqeDqgRbqU2yMmx7RxU8o2FRiPymWiJsEaJupFsniHLr9aijDzXaXDXWeZadYJwQttNAm1tVynwcpuKcF",
  "key2": "61Yy98EnfPww5CioNGy5F2Qi64Z6QtnWSC8vLtQQcHKVwsV9v7rUotsJwWL5z7f4pd5HhCvScgnpecATRdGX6NhA",
  "key3": "26T2WWyvT7oxQ4H1XTWRemjCZCXwn7T7HkkieGVMybSLSnBVcZuJrrDoTwj4t5bQgHJ7KhWZ4GqDUc7kH5uA95Nf",
  "key4": "sDyA1T79UZrh8TRFa17RMDPq8Hitrh4eZsbCdS6GwduZLn1M49eb9JCn3jwRrs19jkNmdiBbcfsvT26P78BEfnj",
  "key5": "4doRu4HL3BYd7Rx3Wa81wmfzQUY9hzxNHgajd6wC2qcPEETGcAUJkm9P4nHGue1npxKdmRRi7HgkKyqxQs75DZgi",
  "key6": "1dPSKFGEm2Q8Qj3sJSg1TT91KQw7K8UPn9cKovupvtPkX86vcSeFeU3V8x2bSV8qheGib2Vp3X6Bayww4wJkeed",
  "key7": "4TVEj4ff4Ecx82ixePbjmaczvtCPpvpE28pLQSnPcx4oiLaqkv173fpWotj5o8wVWqJiFZGDnUb2eF4uKLYo5DCh",
  "key8": "5QGU5ARzEqEKCpFymBjFc44xbABLMmHNy4h86o8JBTpaEqvfdiDDASb3H77YpF7monxYgByBy37bMPmqiAdqsQRG",
  "key9": "5R2RLgws9siyUR8M5dnay2qBgVqsKQyF2eNSKs1rFFKqm2BRScUf5yCfZX2aAiHn1s48Li7TnmLcbFzjUcTfY5e3",
  "key10": "4sjLov8u9pMgKjDi9ENZKaGjmgPhdGAjLMSfvPibcr8SvrvS28neXC96qddefDG3S3orXBezcUsiCpadFF8i9k8x",
  "key11": "243oPXbDayb5mUewXVwb8Y9669VUdZYLTdXKuH56iYdApVZTcDzoqdd2LoXMedPboYY5o22ynURfDEvSifbz2gde",
  "key12": "5D5AdHrgtYzsrjG4YihxK2FxrWt8UokEzbg33mkcpqZwH4iuvr8BG7YAVejNiy1HEwnPdC6G9UqxUQRg8zGJUEv7",
  "key13": "ahTXKtuTQX47Ag2upZRpWRXLQr76up4Ujcd6m7xQVRe2hK6eQiTwC5Ck79xTDaXxXJBeWrkxjDEmt3AK2j9K41m",
  "key14": "7q1kdrCBz6oGfqN16mcLej4ayZv1fuWwGpRZSTsG7DtP5TKK2pgQGfpPzwyNK7PGjFBqBgPP63rsAMfLEwmEer1",
  "key15": "21f6SFQt56564fwhXQGSda7ZTDKWaDBcS9Qg1FfGJPXHmi4nMeSdvs7NPndSzk3ZXEVd6nRjqsCYRigf7KY71jt9",
  "key16": "4Ssog2YbVz7jGbKz8647VTCj5SxGzaGt1JM3W2Koweex1iXYynR9rVMzwydCXJTDhzVCFmAaEvo8s5bGh4mq2D6A",
  "key17": "3ZWrqvA3ZwtraMCSRFBgusHPTwniKL8Cch1T8BCiHzxZk4wuoyZwJj3m9D74KapDyaV3rTFNbp43V126e3XaoPwT",
  "key18": "5mpdVXPMk2hSHXSonMtdAJ4NkqFmEQrCpkrhv6R7sS9jScMEQFFREi83PAgHzGS48H3yB15XCknQ5ZWURE8iRnh",
  "key19": "2Wt9mZuDFoNnG9tk1ygU2U5LJgFKiBuv8WhbK11eBQgtkx127NHwxsurpntNufzG6LNkgBs9z91oMogUbvYhEXgc",
  "key20": "4t8i3AaMe7LgY1CdCZe5yQ1us5xotfqSM8g9MhWq43Mi6PceMdozo8Eq4Av52xTjXHCdGPiX7tfggViR2ak32oQG",
  "key21": "DE3XVYQDkSvsaWanPzuQtopAEVhLZTFx9GGTo3enMsTEDhk5BDHjuHdZTGE8Yf6n8kdLto9JNwXUaALQfAY3pJX",
  "key22": "4hc1mbaWMNrqUHeeZb6PJhudteAmC6RqJujjKLVRF6NPSioDqc1zwXARbLoJkRF8vfQLG6DBjTaY5XYa6pWeSZND",
  "key23": "3jcVfmBxq2w2oTW3oUD22bW6scTYeczW88qxkggosefSgdYgaRxCfvTTmCSuZAssCfagQzjWYS14oGJsn6dnb2L3",
  "key24": "4uNHjV8Xv5bcSzUvQG6oQnnvoEH9Z6pevehQXv4Mgvgb8yDD9YZnZMPJtx2mMNirRyyKV7tbL7rGxfBQBxdo3Uzq",
  "key25": "57cjxjnsqPimmySsbqLqQ4ESEbNiA5PpPyZjeN41L7w3JbugrJDPQSQgM8if6Qr9fAFRaWzQ6nK87kFnu4KXfbHp",
  "key26": "5J8XaeoxnkR6FJu2HZ56v6XqSJznJJgkYHRXwqBebQyQKZGFniq3br2CeosmC9vDbVmhBTqZYezP8WJ219wsZjG1",
  "key27": "2oJGjJxuWjbdfNfEeUyTP8mCwTrTW4Aa4gYJVUSf7AtQrQeA6qW7E8tbG5kZQJpfvgAtaBRwppMdfjU98GoNSv7M",
  "key28": "5zL6cgh7wKNpzXgCAAPE6y4vZfzQzmyTe2NMaff5nzG7gWFBnWtFB2iL6XM97m4QJpzjxGPLtDopLF5HveR66rb8",
  "key29": "57zUBpN2EumRvdwwrKbYoQurYgXxfdjn2hV8P5bsdoW4ctEPAjd5X1mP4W2EoqCpSVUCMUGruEQDSAxM3uszEixF"
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
