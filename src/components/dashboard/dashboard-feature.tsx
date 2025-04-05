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
    "458pjpyorHM2YDauQ19S3iReF7WNR639oYRv9bgvyaJjvM58q47F51dKyEb4uGhuKxnit65vzmVFTfU6zyCL6Rtk"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2JAj5K64UTgb5jGupLk9pbsTpfYoKJ1qrhCQ72WkxyRCQrC8n5ifypiaqZdpuZdQDnfT1oiJM18viRCne9i4dMFy",
  "key1": "HrPWCsZQQF3QxHFgeowNPRYaTgttgUSUKwEim89J6dEq8ZWxaDVqG6NLXQNYyr7BbmNLsnsSpWuyH68m66wHY8Q",
  "key2": "2ZtEefV88Jpke7JWhtKQKnWyFTR5XpJh5QRWfvxouGqG2FQapPRRzo5ZJxApN8jhFsA8bV31jhWHRNHWXm1Gw27z",
  "key3": "3WcYBGXgNXuRfJjpywnLa6YvgmWbmMe7BnUmVNTfQ8mAJUodtFewCyWgaVfHoaZEyGusTwVBZ79NWoHjMsrpt2zi",
  "key4": "5L8NK5mgL4mhn65ygVBBESoG9vRCQgn5iZzFL2VnXB5y9dvJLb6ThGc1HA3vgB8rmK2tdXdZXoHpUmNP59qR8nzM",
  "key5": "4nvsTy6TfU53QqUSN8CmNZGXv3chTmhYoh6agXic61zh9ennNrggibvZPokM2fHTj8tZUSjinwFCaHgGuB6xmmmD",
  "key6": "4vyWw67eYy8fNvBvBBp8oZhZk1V5H5xEEm4zKQpvw1GvkQzcqKGSF69oyVVZbHVJtuSBDRbsDAbVsNAzJkzoVfkH",
  "key7": "5dXBhhsVoaqMpGVXGWbaMDygUfQTUqrqLxUSsthc6hNA7WP4WEnU5iLzhVtQjYeLNurV71j4NSJGnKbb4pohtNA5",
  "key8": "AgPmN9TFTBry9fpePm96n8GoPKYvEjq2wyJS2CjDpYPapSKNVqx3F7JQeyFe4izinze9f8mgRR2kCxrvhPq84FX",
  "key9": "5iEwPU1ftzdD6B7NuvutKe8pTTmnQSMKn6NeraNDboBLFTmyyFpKGyVyUdMs1vMhT9TxsEfcLADpWzksPDoPDzsc",
  "key10": "2wGbbF63YDNwwTgoBv5EEDFK966SLyNKrpwi13HPKLcVQCtg81ytMyDanEMY82KHRv4G8u7ggYKnNrofpAFL6J2V",
  "key11": "4VfgSLdjmQkyeotCzB5QZgmMEuLSjb1rWSsQrmUdfRCvbtn6j5M6T2G4wKNpLAQRN6a5tDP8RMVoJpqxvydzZeap",
  "key12": "3KMA2dCf9o56E7cakCae3gfFWryKTWYsxK35QGRfkHVHJm5Pt78qeYBCqfyEeKWfVMkM2WgSaqremcHPUjM9bK1c",
  "key13": "4BL5DLHUVndkLYkRUS2zwkgN9UFfMXuvkRMfxqdiksyaDj7fZSDmc3xYqPDbYNC5AqBDk64Yc6Tw6VdUUnqKT93Z",
  "key14": "5EybJbTqqS9xm6WQQVRkyR6d7bS8T6Eo2cU8QCdy58PiRCbXP6UXkjxBiGE5sR1F9heirRBWj4a9qGeLLhxjpRHs",
  "key15": "3dyTcCUgbkSWVvkyXJ5PhcYsr3eyxQHpST7cTNR7HuDtJPCzxuvZCNCs14r4p2brchKQkQWFFcsRx4QxvWHcyAzE",
  "key16": "59CxnFz7hW3E5upJ4MKRXTGkLKCyDaCBvkdwaUaZTeSVo1ePi9shYn5Ajr4y4L8rFGRnPNWWxj3nKqbDRgfTKsEo",
  "key17": "4dLaAe8Rt67MgPh5WpMsRVM72VVj1NuH9Jed3d8ok5DM1dCdCotyXHaVoF8jMBmC3PHLxLEHCpb4Y5GunPyKuLAG",
  "key18": "2siG7tSrm6DBaa7X1FHEpQAKVmNYbUUZaA9TgTRSLYVR8bwbznC6AvxHgDqwCNkbPafggdRqMBV8dZy79dnAAcBJ",
  "key19": "35qZ4FTX9pL96mZcLY5hmga86Tp6MMX2H4w4TtwyCNxzmjD76iKLgxwuTKE2snwNbbqBzC5MgqikeK8h3NvqZYfj",
  "key20": "5JiN9s3TEzd3JACrLxxYpSq6akkumwRUgqqi9tuLnLkJSD692Pb6WV1tHVPpmqjUuCUPx67RFKzqWetzmHw3z8iv",
  "key21": "5n14oq61H2AemYqREFfqe24QswTpbbK7X9wSheptRgxTADozieCjabR9fJfN9YJZzTnKHt3AMZCMCMtwWSv13wGR",
  "key22": "3KirRUMzh1GTyeq7SZwCPWuGu6C6DzqFPR56gPcj2Btg742ECDt6jcMmcamLnTuECGx4MLgRWpNu6ChCCM354gWv",
  "key23": "5W579oZmF9nrF5Agpbg2PEaATKdJLA7aYUAZ8RFsBNroFu8qLfgNHx19jhiCL9WRqEYcEzPBDeHVqpiWLZYyd3tc",
  "key24": "n4hLHKA2oK9WgioFh5UDNPCVLbMdaNhWGW4kZDSg4RykBkPNp6ugfzboRovo4ypVJ9FfhA9o9smE5YH1sTLyNya",
  "key25": "Rw72JWKPBFNCza37Z9e6ALXVcnUM6PBtj88m7WjQ1ywdGTXNGosDpN4HtrWzobnwR89HdPnK77ZPNTjcr6F1Wfm",
  "key26": "6697vChFHoeEZBJA4qxjwEx1mq4zhkgtuu57XLJwcsCn2kmTDcPYAM5tUFMEHzLLZkcJnzNEi3WJtu3xnw2Tr35t",
  "key27": "5mVVs1gm2HDiKMkc46b5Mup4BiSDr5kmS1ykiRvYZoBhL4kxNrhb3EApz1Q1aZSf13F3Gaw3mRVNdz6LGkvaekcZ"
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
